const pagination = async (msg, pages, emojiList = ['⏪', '⏩'], timeout = 120000, footerIcon) => {
	if (!msg && !msg.channel) throw new Error('Channel is inaccessible.');
    if(typeof footerIcon !== "string") throw new Error('Footer icon must be a string')
	if (!pages) throw new Error('Página are not given.');
	if (emojiList.length !== 2) throw new Error('Need two emojis.');
	let page = 0;
	const curPage = await msg.channel.send(pages[page].setFooter(`Página ${page + 1} / ${pages.length}`, footerIcon));
	for (const emoji of emojiList) await curPage.react(emoji);
	const reactionCollector = curPage.createReactionCollector(
		(reaction, user) => emojiList.includes(reaction.emoji.name) && !user.bot,
		{ time: timeout }
	);
	reactionCollector.on('collect', reaction => {
		reaction.users.remove(msg.author);
		switch (reaction.emoji.name) {
			case emojiList[0]:
				page = page > 0 ? --page : pages.length - 1;
				break;
			case emojiList[1]:
				page = page + 1 < pages.length ? ++page : 0;
				break;
			default:
				break;
		}
		curPage.edit(pages[page].setFooter(`Página ${page + 1} / ${pages.length}`, footerIcon));
	});
	reactionCollector.on('end', () => {
		if (!curPage.deleted) {
			curPage.reactions.removeAll()
		}
	});
	return curPage;
};
module.exports = pagination;
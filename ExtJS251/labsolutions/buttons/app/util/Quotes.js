/**
	Usage: 
	Buttons.util.Quotes.janeAusten.get('Sense and Sensibility') returns the corresponding quote.
	Buttons.util.Quotes.janeAusten.keys[0] returns 'Sense and Sensibility'
	Buttons.util.Quotes.janeAusten.items[0] returns the quote
*/
Ext.define('Buttons.util.Quotes', {
	singleton: true,
	requires: ['Ext.util.MixedCollection'],
	constructor: function() {
		var mc;
		this.callParent();

		mc = Ext.create('Ext.util.MixedCollection');
		mc.addAll(this.janeAusten);
		this.janeAusten = mc;

	},
	// This is replaced with a MixedCollection in the constructor
	janeAusten: {
		'Sense and Sensibility': 'Mention any favourite amusement to engage her to talk. She could not be silent when such points were introduced, and she had neither shyness nor reserve in their discussion. They speedily discovered that their enjoyment of dancing and music was mutual, and that it arose from a general conformity of judgment in all that related to either. Encouraged by this to a further examination of his opinions, she proceeded to question him on the subject of books; her favourite authors were brought forward and dwelt upon with so rapturous a delight that any young man of five and twenty must have been insensible indeed not to become an immediate convert to the excellence of such works, however disregarded before. Their taste was strikingly alike. The same books, the same passages were idolized by each; or if any difference appeared, any objection arose, it lasted no longer than till the force of her arguments and the brightness of her eyes could be displayed. He acquiesced in all her decisions, caught all her enthusiasm; and long before his visit concluded, they conversed with the familiarity of a long-established acquaintance.',
		'Northanger Abbey': 'It is...in short...some work in which the greatest powers of the mind are displayed, in which the most thorough knowledge of human nature, the happiest delineation of its varieties, the liveliest effusions of wit and humour, are conveyed to the world in the best-chosen language. Now, had the same young lady been engaged with a volume of the Spectator, instead of such a work, how proudly would she have produced the book, and told its name; though the chances must be against her being occupied by any part of that voluminous publication, of which either the matter or manner would not disgust a young person of taste: the substance of its papers so often consisting in the statement of improbable conversation which no longer concern anyone living; and their language, too, frequently so coarse as to give no very favourable idea of the age that could endure it.',
		'Pride and Prejudice': '"Your sister is crossed in love...I congratulate her. Next to being married, a girl likes to be crossed in love a little now and then. It is something to think of and gives her a sort of distinction among her companions. When is your turn to come? You will hardly bear to be long outdone by Jane. Now is your time. There are officers enough [nearby] to disappoint all the young ladies in the country. Let Wickham be your man. He is a pleasant fellow, and would jilt you creditably." "Thank you, sir, but a less agreeable man would satisfy me. We must not all expect Jane\'s good fortune." "True...but it is a comfort to think that whatever of that kind may befall you, you have an affectionate mother who will always make the most of it.',
		'Emma': 'John Knightly ... was in mute astonishment. That a man who might have spent his evening quietly at home after a day of business in London should set off again and walk half a mile to another man\'s house for the sake of being in mixed company till bedtime, of finishing his day in the efforts of civility and the noise of numbers, was a circumstance to strike him deeply. A man who had been in motion since eight o\'clock in the morning and might now have been still-- who had been long talking and might have been silent-- who had been in more than one crowd and might have been alone! Such a man to quit the tranquility and independence of his own fireside, and on the evening of a cold, sleety April day rush out again into the world! Could he, by a touch of his finger, have instantly taken back his wife, there would have been a motive; but his coming would probably prolong rather than break up the party. John Knightly looked at him with amazement, then shrugged his shoulders and said, "I could not have believed it even of him."',
		'Mansfield Park': 'He...tried to make her good qualities understood and to conquer the diffidence which prevented their being more apparent. [...] kept back as she was by everybody else, his single support could not bring her forward, but his attentions were otherwise of the highest importance in assisting the improvement of her mind, and extending its pleasures.... He recommended the books which charmed her leisure hours.  ...he encouraged her taste, and corrected her judgement; he made reading useful by talking to her of what she read, and heightened its attraction by judicious praise',
		'Persuasion': 'She had been unfairly influenced by appearances in each: that because Captain Wentworth\'s manners had not suited her own ideas, she had been too quick in suspecting them to indicate a character of dangerous impetuosity; and that because Mr.Elliot\'s manners had precisely pleased her in their propriety and correctness, their general politeness and suavity, she had been too quick in receiving them as the certain result of the most correct opinions and well-regulated mind. ...there was nothing left for her to do but to admit that she had been pretty completely wrong, and to take up a new set of opinions and hopes.'
	}

});
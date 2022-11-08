

export default {
	'/handler/': function({get}) {
		let arr = ['awdwadaw', '3sadad', '54313', 'lol'];
		return arr[get.num];
	}
}
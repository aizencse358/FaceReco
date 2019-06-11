

const handleImage = (req,res,db) =>{
	const {id} = req.body;
	db('users').where('id', '=', id)
	.increment('entries',1)
	.returning('entries')
	.then(response => {
		res.json(response[0]);
	})
	.catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
	handleImage: handleImage
};
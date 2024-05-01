
const user = require('../models/user');
exports.postUser = async (req, res, next) => {

    const {name,email,phonenumber}=req.body
    try {
        const data=await user.create({
            name:name,
            email:email,
            phonenumber:phonenumber
        })
        res.status(201).json(data)
    } catch (error) {
        console.log("ERROR:(",error);
        res.status(500).json({ error: 'Failed to create expense' })
    }
};
exports.getUser=async (req,res,next)=>{
    try {
        const users=await user.findAll()
        res.status(200).json(users);
    } catch (error) {
        console.log("ERROR:(",err);
        res.status(500).json({ error: 'Failed to retrieve expenses' });
    }
}
exports.deleteUser=async (req,res,next)=>{
    user.findByPk(req.params.id)
    .then(result => {
        result.destroy()
        res.send(result);
    }).catch(err => console.log(err));
}

exports.getEditUser = (req, res, next) => {
    // const editMode = req.query.name;
    // if (!editMode) {
    //     return res.redirect('/');
    // }
    const id = req.params.id;
    user.findByPk(id)
        .then(result => {
            if (!result) {
                return res.status(404).json({ error: 'Expense not found' });
            }
            res.status(200).json(result);
        })
        .catch(err => {
            console.log("ERROR:(", err);
            res.status(500).json({ error: 'Failed to enable edit mode' });
        });
};

// exports.postEditUser = (req, res, next) => {
//     const id = req.body.id;
//     const { uname, uemail, uphonenumber } = req.body;

//     user.findByPk(id)
//         .then(result => {
//             if (!result) {
//                 return res.status(404).json({ error: 'Expense not found' });
//             }
//             result.name = uname;
//             result.email = uemail;
//             result.phonenumber = uphonenumber;
//             return result.save();
//         })
//         .then(() => {
//             console.log("Expense updated:", id);
//             res.status(200);
//         })
//         .catch(err => {
//             console.log("ERROR:(", err);
//             res.status(500).json({ error: 'Failed to update details' });
//         });
// };
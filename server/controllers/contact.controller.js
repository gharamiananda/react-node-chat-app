import User from "../models/user.model.js";



export const searchContact = async (req, res, next) => {


    const searchTerm = req.body.searchTerm;




    const sanitizeSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(sanitizeSearchTerm, "i");


    const contacts = await User.find({
        $and: [
            {
                _id: {
                    $ne: req.user.userId
                }
            },
            {
                $or: [
                    {
                        firstName: regex,
                    }, {
                        lastName: regex
                    }, {
                        email: regex
                    }
                ]
            }
        ]
    })


    return res.status(200).json({
        success: true, contacts, message: 'contact list retrived successfully'
    });


}
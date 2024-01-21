const User= require('../models/user');


module.exports.profile = function(req, res){
    res.end('<h1>User Profile</h1>');
}


//// render sign up Page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "newProject | Sign Up"
    })
}


// render sign in Page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "newProject | Sign In"
    })
}

// get the sign up data
// module.exports.create = function(req, res){
//     if(req.body.password != req.body.confirm_password){
//         return res.redirect('back');
//     }
//     User.findOne({email:req.body.email}, function(err, user){
//         if(err){console.log('error in finding user in singing up'); return}

//         if(!user){
//             User.create(req.body, function(err, user){
//                 if(err){console.log('error in creating user in singing up'); return}

//                 return res.redirect('/users/sign-in')

//             })

//         }else{
//             return res.redirect('back');
//         }
        
//     })
    
// }
module.exports.create = async function (req, res) {
    try {
      if (req.body.password != req.body.confirm_password) {
        return res.redirect("back");
      }
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        await User.create(req.body);
        // req.flash("success", "Signed Up Successfully");
        console.log("user created");
        return res.redirect("/users/sign-in");
      } else {
        return res.redirect("back");
      }
    } catch (err) {
      if (err) {
        console.log(`ERROR ===> Sign Up ==> ${err}`);
        return;
      }
    }
  };
    


//Sign in and create session for the user
module.exports.createSession = function(req,res){
    //To do later
}
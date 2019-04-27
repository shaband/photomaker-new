 function setGlobalVariables(req, res, next) {
     /*   res.local.successMsg = function (successMsg) {
           if (typeof successMsg != undefined && (successMsg != "" || successMsg != null)) {
               return `<div class="alert alert-success">
                       <strong>Success!</strong> ${successMsg}
                   </div>`
           } else return null;
       };
       res.local.errorMsg = function (errors) {
           if (typeof errors == Array && errors.length > 0) {
               let errors_list = ``;
               for (err of errors) {
                   errors_list += `<li class="list-group-item">${err}</li>`
               }
               return `<ul class="list-group"> ${errors_list} </ul>`
           }
       }; */

     console.log(res.local);
     //  res.local.successMsg = 'aaa'
 }

 module.exports = function (app) {
     app.use(setGlobalVariables);
 }
var client = require('../../../db_connection')
exports.add=(req,res)=>{
 
  client.query(`INSERT INTO papier_administratif (id_papierAdministratif,date,raison, type_papier,id_user,id_statut_papier) VALUES ('${req.body.id_papierAdministratif}','${req.body.date}','${req.body.type_papier}','${req.body.id_etudiant}')`, function (err, result) {
      if (err){
          res.status(res.statusCode).json({
              errorCode: err.message,
              status: res.statusCode,
              
            });
      }else{
          res.status(res.statusCode).json({
              message: "done",
              data:result,
              status: res.statusCode,
            });
      }
    });

}
exports.update=(req,res)=>{
  
  client.query( 'UPDATE papier_administratif SET date=?,type_papier=? where id_papierAdministratif=? ',
              [req.body.date,req.body.type_papier,req.params.id] , function (err, result) {
      if (err){
          res.status(res.statusCode).json({
              errorCode: err.message,
              status: res.statusCode,
              
            });
      }else{
          res.status(res.statusCode).json({
              message: "done",
              data:result,
              status: res.statusCode,
            });
      }
    });

}

exports.delete=(req,res)=>{
  
  client.query( 'DELETE from papier_administratif where id_papierAdministratif=? ',
              [req.params.id] , function (err, result) {
      if (err){
          res.status(res.statusCode).json({
              errorCode: err.message,
              status: res.statusCode,
              
            });
      }else{
          res.status(res.statusCode).json({
              message: "done",
              data:result,
              status: res.statusCode,
            });
      }
    });

}
/////////////////////////////////////////////////
//   au cas de tous les utilisateur ont des id papier =1 ex client.query( 'select email ,nom,prenom , cin ,id_papier,id_type_papier,date from  papier_administratif, user where id_papier=? ',

exports.getById=(req,res)=>{
    client.query( 'select  id_papier,id_type_papier,date,email ,nom,prenom , cin from  user,papier_administratif where user.id_user=papier_administratif.id_user and user.id_user=?  ',
              [req.params.id] , function (err, result) {
      if (err){
          res.status(res.statusCode).json({
              errorCode: err.message,
              status: res.statusCode,
              
            });
      }else{
        res.json(result);
          res.status(res.statusCode).json({
              message: 'Done',
              data:result,
              status: res.statusCode,
              
            });
      }
    });

}
//////////////////////////////////Selection les papiers simple //////////////////////
exports.getPapierNonRaison=(req,res)=>{
  client.query( 'select  id_papier,id_type_papier,date,email ,nom,prenom , cin from  user,papier_administratif where user.id_user=papier_administratif.id_user and where raison =""  ',
            [req.params.id] , function (err, result) {
    if (err){
        res.status(res.statusCode).json({
            errorCode: err.message,
            status: res.statusCode,
            
          });
    }else{
      res.json(result);
        res.status(res.statusCode).json({
            message: 'Done',
            data:result,
            status: res.statusCode,
            
          });
    }
  });

}
//////////////////////////////////////////////////////Selectionne les papiers a raison ///////////////////////////////////////
exports.getById=(req,res)=>{
  client.query( 'select  id_papier,id_type_papier,date,email ,nom,prenom , cin from  user,papier_administratif where user.id_user=papier_administratif.id_user and raison != "" ',
            [req.params.id] , function (err, result) {
    if (err){
        res.status(res.statusCode).json({
            errorCode: err.message,
            status: res.statusCode,
            
          });
    }else{
      res.json(result);
        res.status(res.statusCode).json({
            message: 'Done',
            data:result,
            status: res.statusCode,
            
          });
    }
  });

}
/**
 * Created by RickD on 2016/8/21.
 */
var Sequelize = require('../db_config').Sequelize;
var sequelize = require('../db_config').sequelize;

var User = sequelize.define('user',{
    id:{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    username:{
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    password:{
        type : Sequelize.STRING,
        allowNull : false
    },
    authority:{
        type : Sequelize.STRING,
        allowNull : true
    },
    createAt:{
        type : Sequelize.DATE,
        allowNull : false,
        defaultValue : Sequelize.NOW
    },
    updateAt:{
        type : Sequelize.DATE,
        allowNull : true
    }
},{
    freezeTableName : true,
    timestamps : false
});

User.sync();    //同步数据表
//User.sync({force:'true'});

//Insert,插入数据之前先查看是否已经有该用户名
User.FindOrCreate = function(_username,_passwd) {
  User.findOrCreate({where:{username:_username},default:{password:_passwd}})
      .spread(function(user,created){
          console.log(user.get({
              plain:true
          }));
          if(created){
              return true;
          }else{
              return false;
          }
      });
};

//用户信息验证
User.Validation = function (_username, _passwd) {
    User.find({where:{username:_username,password:_passwd}}).then(function (user) {
        console.log('----姓名'+user.username+'   密码：'+user.password);
        return user;
    });
};

//根据用户名字段查找数据
User.FindByUserName  = function (_username) {
    User.find({where:{username:_username}}).then(function (user) {
        console.log('----姓名'+user.username+'密码：'+user.password);
        if(user != null)
        {
            console.log(JSON.stringify(user));
            return true;
        }
        else
            return false;
    });
};

//查找符合一定条件的数据，返回一个对象数组，并转化为Json数组
User.FindAndCountAll = function () {
    User.findAndCountAll({attributes:['username','password','createAt','location'],
        where:{
            location:{
                $like : '江%'
            }
        },
        //group:'password',
        order:'createAt DESC', //根据创建时间逆序排序
        limit:10,   //查询结果返回多少条数据
        offset:0    //返回的数据从第0条开始读取
    }).then(function (result) {
        //console.log(result.rows);
        return JSON.stringify(result.rows);
    });
};

//更新数据
User.UpdatePasswd = function (_username,_passwd) {
    User.find({where:{username:_username}}).then(function (user) {
        if(user!=null){
            user.update({password:_passwd,updateAt:Date.now()},{fields:['password','updateAt']}).then(function () {
                return true;
            });
        }else {return false;}
    });
};


//删除数据
User.Delete = function (_username) {
    User.destroy({
        where:{username:_username}
    }).then(function () {
        return true;
    });
};

module.exports = User;

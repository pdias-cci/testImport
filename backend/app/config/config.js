//config file. Ignore by GIT.
var config = {
  //Miscellaneous Configs
  secret : "shediv",

  //SMTP Configs
  smtpService : 'smtp.mandrillapp.com',
  smtpHost : 'smtp.mandrillapp.com',
  smtpAuth : {
    user: 'LittleHoots', //www.creativecapsule.com
    pass: '7svi82sWZFQqAUZKWq9Lhg' //1C0lKsSFlPkZgOqGBO6exg
  },
  smtpPort:587,

  //Domain Name Configs
  appHost : 'http://ui.littlehoots.chapora.ccigoa:8282/#/',

  apiHost : "http://api.littlehoots.chapora.ccigoa:8282",    
};

module.exports = config;
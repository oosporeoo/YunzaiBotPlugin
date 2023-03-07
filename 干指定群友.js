import { segment } from "oicq";
import plugin from '../../lib/plugins/plugin.js'

/**
 * @Author: oosporeoo 
 * @Date: 2023/03/07
 * @Description: 干指定At的群友
 **/

export class fuck extends plugin {
  constructor () {
    super({
      name: '干群友',
      dsc: '干指定群友',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^(干|草|透|日|超)(.*)$',
          fnc: 'fuckAt'
        }
      ]
    })
  }

  async fuckAt (e) {
    let atQQ = e.at;
    if(atQQ == null){
        e.reply("请在群内使用@方式来输出TA！");
        return true;
    }
    let map = new Map();
    map = await e.group.getMemberMap();
    let result = map.get(atQQ);
    let atNickname = result.card;
    let num = Math.round(Math.random() * 100);
    if(num <= 3){
        e.reply([segment.at(e.user_id), "看见了【"+atNickname+"】的巨货后根本抬不起头来了，并被嘲讽了一句：“就这？”",segment.image('https://q1.qlogo.cn/g?b=qq&s=0&nk='+ atQQ +'&s=100')]); 
    }else if(num > 3 && num <= 8){
        e.reply([segment.at(e.user_id), "尝试进入【"+atNickname+"】的时候居然透歪了！！",segment.image('https://q1.qlogo.cn/g?b=qq&s=0&nk='+ atQQ +'&s=100')]); 
    }else if(num > 8 && num <= 15){
        e.reply([segment.at(e.user_id), "的金针菇让【"+atNickname+"】表示根本没感觉...",segment.image('https://q1.qlogo.cn/g?b=qq&s=0&nk='+ atQQ +'&s=100')]);  
    }else if(num > 15 && num <= 25){
        e.reply([segment.at(e.user_id), "透【"+atNickname+"】到一半突然就软了！真辣鸡！",segment.image('https://q1.qlogo.cn/g?b=qq&s=0&nk='+ atQQ +'&s=100')]); 
    }else if(num > 25 && num <= 50){
        e.reply([segment.at(e.user_id), "把【"+atNickname+"】干了个爽~",segment.image('https://q1.qlogo.cn/g?b=qq&s=0&nk='+ atQQ +'&s=100')]); 
    }else if(num > 50 && num <= 70){
        e.reply([segment.at(e.user_id), "狠狠地输出了一顿【"+atNickname+"】,差点晕厥",segment.image('https://q1.qlogo.cn/g?b=qq&s=0&nk='+ atQQ +'&s=100')]);  
    }else if(num > 70 && num <= 90){
        e.reply([segment.at(e.user_id), "如同泰迪一般对着【"+atNickname+"】停不下来了！！！",segment.image('https://q1.qlogo.cn/g?b=qq&s=0&nk='+ atQQ +'&s=100')]); 
    }else if(num > 90 && num <= 99){
        e.reply([segment.at(e.user_id), "非常温柔地对待【"+atNickname+"】透了一顿",segment.image('https://q1.qlogo.cn/g?b=qq&s=0&nk='+ atQQ +'&s=100')]);  
    }else if(num == 100){
        e.reply([segment.at(e.user_id), "居然在透【"+atNickname+"】的过程中睡着了Zzzz.....",segment.image('https://q1.qlogo.cn/g?b=qq&s=0&nk='+ atQQ +'&s=100')]); 
    }
  }
}

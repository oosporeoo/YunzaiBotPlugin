import { segment } from "oicq";
import plugin from '../../lib/plugins/plugin.js'
import fs from 'fs'

/**
 * @Author: oosporeoo 
 * @Date: 2023/03/08
 * @Description: 迫害群友
 **/

export class persecute extends plugin {
  constructor () {
    super({
      name: '迫害群友',
      dsc: '对指定群友进行迫害',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#迫害(.*)$',
          fnc: 'persecuteAt'
        }
      ]
    })
  }
  
    async persecuteAt (e) {
      if (e.at == null) {
            e.reply("无迫害对象");
            return true;
      }
    console.log(e.at);
    let data = fs.readFileSync('plugins/example/Text/迫害文案.txt', 'utf-8')
    let arr = data.toString().split("\n");
    let randIndex = Math.floor(Math.random() * arr.length);
    let msg = arr[randIndex];
    e.reply([segment.at(e.at),msg]);
    }
}


    

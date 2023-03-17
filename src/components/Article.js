import React from "react";

function Article({ title, date = 'January 1,1970', preview,minutes }) {

console.log(minutes)
    function readTime(){     
        let emojis = "";
        if (minutes<30) { emojis = "☕️".repeat(Math.ceil(minutes/5)) } else {emojis = "🍱".repeat(Math.ceil(minutes/10) ) }
    
        return emojis
    }


    // function makeEmojiList(minutes) {
    //     const interval = minutes < 30 ? 5 : 10;
    //     const emoji = minutes < 30 ? "☕️" : "🍱";
      
    //     let emojis = "";
    //     for (let i = 0; i < minutes; i += interval) {
    //       emojis += emoji;
    //     }
      
    //     return emojis;
    //   }
      

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {readTime()} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )

}
export default Article
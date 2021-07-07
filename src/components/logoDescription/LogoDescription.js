import React, {useState} from 'react';


export const LogoDescription = ({logo}) =>{
    const titles= {
        "letter":"Lettermark Logos",
        "word":"Wordmark Logos",
        "pictorial":"Pictorial Mark Logos",
        "abstract":"Abstract Mark Logos",
        "mascot": "Mascot Logos",
        "combination": "Combination Logos"
    };

    const descriptionsP1 = {
        "letter":`A Monogram or lettermark is a typography-based logo that's comprised of a few letters, usually a company's initials. The lettermark is all about simplicity.`,

        "word":`Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business' name alone. Think Visa and Coca-cola. Wordmark logos really work well when
        a company has a succinct and distinct name. Google's logo is a great exapmle of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps
        create strong brand recognition.`,

        "pictorial":`A pictorial mark (sometimes called brand mark or logo symbol) is an icon - or graphic-based logo. It's probably the image that comes to mind when you think "logo":
        the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies' logos is so emblematic, and each brand so established that the mark is instantly
        recognizable. `,

        "abstract":`An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image - like and apple or bird - it's an abstractgeometric form that represents
        your business. A few famous examples include the BP starburst-y logo, the Pepsi divided circle, and the strip-y Adidas flower.`,

        "mascot": `Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and almost always fun, the mascot logo is a great way to create your 
        very own brand spokesperson.`,

        "combination": `A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be 
        laid out side-by-side, stacked on top of each other, or integrated together to create an image.`
    }

    const descriptionsP2 = {
        "letter":`By utilizing just a few letters, lettermark logos are effective at streamlining any company brand if they have a long name.`,

        "word":``,

        "pictorial":` A true Brand mark is only an image. Because of this, it can be a tricky logo type for new companies, or those without strong brand recognition, to use.`,

        "abstract":`Like all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something
        recognizable, abstract logos allow you to create something truly unique to represent your brand.`,

        "mascot": `A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC's Colonel 
        and PUB's cute Water Wally.`,

        "combination": `Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascor working together to reinforce your brand.`
    }



    return(
        <div className = "logo-description">
            <h2>{titles[logo]}</h2>
            <p>{descriptionsP1[logo]}</p>
            
            <p>{descriptionsP2[logo]}</p>
        </div>
    )

}
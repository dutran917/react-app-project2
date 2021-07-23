

import {Image} from 'react-bootstrap'
import Typed from 'react-typed'
const Homepage = ({language})=> {
    return(
        <div>
            <div className='txtdeepshadow'>
                {language=='eng' && <Typed  
                    strings={["Tran Quoc Du"]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop/>}
                {language=='japan' && <Typed  
                    strings={["チャン・クオック・ズー"]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop/>}    
            </div>
            <div className='detail'>
                
                <div className='about-me'>
                    {language=='eng' && 
                    <div>
                        <h3>My name is Tran Quoc Du. Currently I am 21 years old and am a 3rd year student of Information Technology Faculty of Hanoi University of Science and Technology. I can communicate in both English and Japanese. I orient myself to be a front-end developer, I have basic knowledge of HTML5, CSS3, JAVASCRIPT and have proficiently used ReactJS library.</h3>
                        <h3>My hobbies are music and fashion. When I was a kid, I dreamed of becoming a producer of electronic music. But when I was growing up, I realized that I had no talent for composing music and turned to programming. I am building a website that allows users to freely share music, also partly to satisfy my passion.</h3>
                    </div>}
                    {language=='japan' &&
                    <div>
                        <h3>私の名前はチャン・クオック・ズーです。 現在、私は21歳で、ハノイ工科大学の情報技術学部の3年生です。 私は英語と日本語の両方でコミュニケーションをとることができます。 私はフロントエンド開発者になることを目指しています。HTML5、CSS3、JAVASCRIPTの基本的な知識があり、ReactJSライブラリを上手に使用しています。</h3>
                        <h3>私の趣味は音楽とファッションです。 子供の頃、電子音楽のプロデューサーになることを夢見ていました。 しかし、私が成長していたとき、私には音楽を作曲する才能がないことに気づき、プログラミングに目を向けました。 私は、ユーザーが自由に音楽を共有できるウェブサイトを構築しています。これも私の情熱を満足させるためです。</h3>
                    </div>}
                </div>
                <div className='avatar'>
                    <Image src="./avt.png" roundedCircle  />
                </div>
            </div>
        </div>
    )
}
export default Homepage
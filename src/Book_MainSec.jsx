import React from 'react';


function Book_MainSec(){
    return(
        
    <>
        {/* Check new arrivels DIV START  */}
        <div className="check_arrival">
            <p id="check_arrivels_title"><a href="/">check new arrivals</a></p>
        </div>
        {/* Check new arrivels DIV END  */}
        {/* COLLAGE BOOK DIV START  */}
        <div className="find_your_collage_book">
            <p id="collage_title">Find books in your city or institute</p>
            <input type="text" placeholder="Select city name"/>
            <input type="text" placeholder="Select collage name"/>
            <a id="collage_dis" href="/">Can't find your City / Institute? Add now</a>
        </div>
        {/* COLLAGE BOOK DIV END  */}

        {/* LOOKING FOR BOOK DIV START  */}
            <div className="looking_for">
                <p>Looking for:</p>
                <div className="looking_for_checkbox">
                    <input type="checkbox" id="novel" name="novel" value="novel"/>
                    <label for="novel"> Novel / Book</label><br></br>
                    <input type="checkbox" id="textbook" name="textbook" value="textbook"/>
                    <label for="textbook"> Textbook/Study notes</label><br></br>
                    <input type="checkbox" id="magazine" name="magazine" value="magazine"/>
                    <label for="magazine"> Magazine</label><br></br>
                    <input type="checkbox" id="bookset" name="bookset" value="bookset"/>
                    <label for="bookset"> Book Set</label>
                </div>
            </div>
        {/* LOOKING FOR  BOOK DIV END  */}
        {/* Posted On BOOK DIV START  */}
                <div className="looking_for">
                <p>Posted On:</p>
                <div className="looking_for_checkbox">
                    <input type="checkbox" id="sell" name="sell" value="sell"/>
                    <label for="sell"> sell</label><br></br>
                    <input type="checkbox" id="exchange" name="exchange" value="exchange"/>
                    <label for="exchange"> exchange</label><br></br>
                    <input type="checkbox" id="donate" name="donate" value="donate"/>
                    <label for="donate"> donate</label><br></br>
                </div>
            </div>
        {/* Posted On  BOOK DIV END  */}
        {/* Category BOOK DIV START  */}
            <div className="looking_for">
                <p>Category:</p>
                <div className="looking_for_checkbox">
                    <input type="checkbox" id="conputer & technology" name="conputer & technology" value="conputer & technology"/>
                    <label for="conputer & technology"> conputer & technology</label><br></br>

                    <input type="checkbox" id="business & management" name="business & management" value="business & management"/>
                    <label for="business & management"> business & management</label><br></br>

                    <input type="checkbox" id="accounting & taxation" name="accounting & taxation" value="accounting & taxation"/>
                    <label for="accounting & taxation"> accounting & taxation</label><br></br>

                    <input type="checkbox" id="laws & regulaton" name="laws & regulaton" value="laws & regulaton"/>
                    <label for="laws & regulaton"> laws & regulaton</label><br></br>

                    <input type="checkbox" id="entrance exams" name="entrance exams" value="entrance exams"/>
                    <label for="entrance exams"> entrance exams</label><br></br>

                    <input type="checkbox" id="school books" name="school books" value="school books"/>
                    <label for="school books"> school books</label><br></br>

                    <input type="checkbox" id="degine, arts & photography" name="degine, arts & photography" value="degine, arts & photography"/>
                    <label for="degine, arts & photography"> degine, arts & photography</label><br></br>

                    <input type="checkbox" id="biographies & autobiographies" name="biographies & autobiographies" value="biographies & autobiographies"/>
                    <label for="biographies & autobiographies"> biographies & autobiographies</label><br></br>

                    <input type="checkbox" id="romance & short stories" name="romance & short stories" value="romance & short stories"/>
                    <label for="romance & short stories"> romance & short stories</label><br></br>

                    <input type="checkbox" id="sport & outdoors" name="sport & outdoors" value="sport & outdoors"/>
                    <label for="sport & outdoors"> sport & outdoors</label><br></br>

                    <input type="checkbox" id="Music, Films & Entertainment" name="Music, Films & Entertainment" value="Music, Films & Entertainment"/>
                    <label for="Music, Films & Entertainment"> Music, Films & Entertainment</label><br></br>

                    <input type="checkbox" id="religion & spirtuality" name="religion & spirtuality" value="religion & spirtuality"/>
                    <label for="religion & spirtuality"> religion & spirtuality</label><br></br>

                    <input type="checkbox" id="history & politics" name="history & politics" value="history & politics"/>
                    <label for="history & politics"> history & politics</label><br></br>

                    <input type="checkbox" id="mystery, triller & suspence" name="mystery, triller & suspence" value="mystery, triller & suspence"/>
                    <label for="mystery, triller & suspence"> mystery, triller & suspence</label><br></br>

                    <input type="checkbox" id="children's books" name="children's books" value="children's books"/>
                    <label for="children's books"> children's books</label><br></br>

                    <input type="checkbox" id="skill, dictionary, learning" name="skill, dictionary, learning" value="skill, dictionary, learning"/>
                    <label for="skill, dictionary, learning"> skill, dictionary, learning</label><br></br>

                    <input type="checkbox" id="cooking, food & drink" name="cooking, food & drink" value="cooking, food & drink"/>
                    <label for="cooking, food & drink"> cooking, food & drink</label><br></br>

                    <input type="checkbox" id="motivational & inspirational" name="motivational & inspirational" value="motivational & inspirational"/>
                    <label for="motivational & inspirational"> motivational & inspirational</label><br></br>

                    <input type="checkbox" id="leaderdhip, business & entreprenurship" name="leaderdhip, business & entreprenurship" value="leaderdhip, business & entreprenurship"/>
                    <label for="leaderdhip, business & entreprenurship"> leaderdhip, business & entreprenurship</label><br></br>

                    <input type="checkbox" id="medical & biology cooks" name="medical & biology cooks" value="medical & biology cooks"/>
                    <label for="medical & biology cooks"> medical & biology cooks</label><br></br>
                    
                    <input type="checkbox" id="general khowledge, tricks & puzzles" name="general khowledge, tricks & puzzles" value="general khowledge, tricks & puzzles"/>
                    <label for="general khowledge, tricks & puzzles"> general khowledge, tricks & puzzles</label><br></br>
                    
                    <input type="checkbox" id="fashion & life style" name="fashion & life style" value="fashion & life style"/>
                    <label for="fashion & life style"> fashion & life style</label><br></br>
                    
                    <input type="checkbox" id="science & research" name="science & research" value="science & research"/>
                    <label for="science & research"> science & research</label><br></br>
                    
                    <input type="checkbox" id="fiction" name="fiction" value="fiction"/>
                    <label for="fiction"> fiction</label><br></br>
                    
                    <input type="checkbox" id="helth & fitness" name="helth & fitness" value="helth & fitness"/>
                    <label for="helth & fitness"> helth & fitness</label><br></br>
                    
                    <input type="checkbox" id="non fiction" name="non fiction" value="non fiction"/>
                    <label for="non fiction"> non fiction</label><br></br>
                    
                    <input type="checkbox" id="life & philosophy" name="life & philosophy" value="life & philosophy"/>
                    <label for="life & philosophy"> life & philosophy</label><br></br>
                    
                    <input type="checkbox" id="hospitality, travel & tourism" name="hospitality, travel & tourism" value="hospitality, travel & tourism"/>
                    <label for="hospitality, travel & tourism"> hospitality, travel & tourism</label><br></br>
                    
                    <input type="checkbox" id="coffee table book" name="coffee table book" value="coffee table book"/>
                    <label for="coffee table book"> coffee table book</label><br></br>
                    
                    <input type="checkbox" id="architecure" name="architecure" value="architecure"/>
                    <label for="architecure"> architecure</label><br></br>
                    
                    <input type="checkbox" id="comics & graphic novels" name="comics & graphic novels" value="comics & graphic novels"/>
                    <label for="comics & graphic novels"> comics & graphic novels</label><br></br>
                    
                    <input type="checkbox" id="engineering" name="engineering" value="engineering"/>
                    <label for="engineering"> engineering</label><br></br>
                    
                    <input type="checkbox" id="classic & literature" name="classic & literature" value="classic & literature"/>
                    <label for="classic & literature"> classic & literature</label><br></br>
                    
                    <input type="checkbox" id="others" name="others" value="others"/>
                    <label for="others"> others</label><br></br>

                </div>
            </div>
        {/*CategoryBOOK DIV END  */}
        
    </>
    );
    
}


export default Book_MainSec;


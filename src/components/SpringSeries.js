import React from 'react'
import { BiTime } from 'react-icons/bi'
import { FaChevronDown } from 'react-icons/fa'
function SpringSeries() {
    return (
        <>
            <div className='main-table'>
                <div className="header">
                    ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ
                </div>
                <div className="content">
                    <div className="poker-lobby">
                        <p>სერიის ფარგლებში ყოველდღე გაიმართება 3 ივენთი:</p>
                        <div className='time'><div><BiTime /></div> 19:00 / 19:30 / 20:00 </div>
                        <p>* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან</p>
                        <p>ტურნირების სრული განრიგის სანახავად გადადი <br />პოკერის ლობიში</p>
                        <button>პოკერის ლობი</button>
                        <img src={require('../assets/images/promo-left-img.png')} alt="" />
                        <img src={require('../assets/images/promo-right-img.png')} alt="" />
                    </div>

                </div>
            </div>
            <div className="main-table">
                <div className='header'>ᲛᲝᲮᲕᲓᲘ TOP20 ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ ᲓᲐᲒᲠᲝᲕᲔᲑᲣᲚᲘ ᲥᲣᲚᲔᲑᲘᲗ</div>
                <div className="content">
                    <div className="header mechanics">
                        <div>
                            ქულების დაგროვების მექანიკა <FaChevronDown />
                        </div>
                    </div>
                    <div className="table">
                        <div><span>ადგილი</span>
                            <span><img src={require('../assets/images/voucher.png')} alt="" /> ვაუჩერი</span>
                            <span>პრიზი</span>
                        </div>
                        <div className="scrollbar" style={{ scrollbarColor: 'red' }}>
                            <div>
                                <span>1</span>
                                <span>---</span>
                                <span><img src={require('../assets/images/travel-icon-sm.png')} alt="" />  A კატეგორიის საგზური</span>
                            </div>
                            <div>
                                <span>2</span>
                                <span>---</span>
                                <span><img src={require('../assets/images/ticket-icon-sm.png')} alt="" />B კატეგორიის საგზური</span>
                            </div>
                            <div>
                                <span>3</span>
                                <span>1500 ₾</span>
                                <span>სპეც. ტურნირის ბილეთი</span>
                            </div>
                            <div>
                                <span>4</span>
                                <span>1200 ₾</span>
                                <span>სპეც. ტურნირის ბილეთი</span>
                            </div>
                            <div>
                                <span>5</span>
                                <span>1000 ₾</span>
                                <span>სპეც. ტურნირის ბილეთი</span>
                            </div>
                            <div>
                                <span>6</span>
                                <span>800 ₾</span>
                                <span>სპეც. ტურნირის ბილეთი</span>
                            </div>
                            <div>
                                <span>7</span>
                                <span>600 ₾</span>
                                <span>სპეც. ტურნირის ბილეთი</span>
                            </div>
                            <div>
                                <span>8</span>
                                <span>400 ₾</span>
                                <span>სპეც. ტურნირის ბილეთი</span>
                            </div>
                            <div>
                                <span>9</span>
                                <span>200 ₾</span>
                                <span>სპეც. ტურნირის ბილეთი</span>
                            </div>
                            <div>
                                <span>10</span>
                                <span>100 ₾</span>
                                <span>სპეც. ტურნირის ბილეთი</span>
                            </div>
                        </div>

                    </div>
                    <div className=" second-table">
                        <div className="">
                            <img src={require('../assets/images/travel-icon-sm.png')} alt="" />
                            <span>The Festival in Malta-ს საგზური</span>
                        </div>
                        <div className="">
                            <img src={require('../assets/images/ticket-icon-sm.png')} alt="" />
                            <span>სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური</span>
                        </div>
                        <div className="">
                            <img src={require('../assets/images/vouchetbg.png')} alt="" />
                            <span>The Festival in Malta-ს საგზური</span>
                        </div>
                    </div>




                    <div className="lobby">
                        * ლიდერბორდის შედეგები განახლდება <a href="https://www.europebet.com/ka" target="_blank" rel="noopener noreferrer"> პოკერის ლობიში</a>
                    </div>
                    <div className="lobby">
                        * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და სატელიტები
                    </div>
                </div>
                <div className="content full-border">
                    <div className="header">ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</div>
                    <div className="images">
                        <div className='halfs'>
                            <div>
                                <img src={require('../assets/images/tournament-bg2.png')} alt="" />
                                <div className="image-text">
                                    <div>
                                        <div>
                                            <span>Holdem Highrollers</span>
                                            <span className='yell'>50 000 ₾</span>
                                        </div>
                                        <div>
                                            <span>ბაი-ინი - 550₾</span>
                                            <button>27 აპრილი</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={require('../assets/images/tournament-bg2.png')} alt="" />
                                <div className="image-text">
                                    <div>
                                        <div>
                                            <span>Holdem Highrollers</span>
                                            <span className='yell'>50 000 ₾</span>
                                        </div>
                                        <div>
                                            <span>ბაი-ინი - 550₾</span>
                                            <button>27 აპრილი</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <img src={require('../assets/images/main-bg.png')} alt="" />
                            <div className="image-text main ">
                            <div >
                                        <div>
                                            <span>Main Events</span>
                                            <span className='yell'>150 000₾</span>
                                        </div>
                                        <div>
                                            <span>ბაი-ინი - 550₾</span>
                                            <button>29 აპრილი</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className='LOTR'>
                    * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The Lord of the Rings ტურნირზე, იბრძოლებენ The  Festival in Malta-ს საგზურის მისაღებად.
                    </div>
                </div>
            </div>
        </>

    )
}

export default SpringSeries
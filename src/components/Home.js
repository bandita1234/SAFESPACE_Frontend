import React from "react";
import "../css/card.css";
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdVerified } from "react-icons/md";

import Navbar from './Navbar'

const Home = () => {
  return (
    <div style={{color:'#45f3ff'}}>
      <Navbar/>
      <div className="main">
        <div className="left_div">
          <div className="popular_doctors">
          <h2>Recommended Doctors</h2>
            <div className="doctor_container">
              <div className="head_container">
                <div className="card_img">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="img"
                  />
                </div>
                <div>
                  <h3>name</h3>
                  <p>Pshychatrist</p>
                </div>
              </div>
              <MdVerified style={{ fontSize: "2em", color: "blue" }} />
            </div>
          

            <div className="doctor_container">
              <div className="head_container">
                <div className="card_img">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="img"
                  />
                </div>
                <div>
                  <h3>name</h3>
                  <p>Pshychatrist</p>
                </div>
              </div>
              <MdVerified style={{ fontSize: "2em", color: "blue" }} />
            </div>

            <div className="doctor_container">
              <div className="head_container">
                <div className="card_img">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="img"
                  />
                </div>
                <div>
                  <h3>name</h3>
                  <p>Pshychatrist</p>
                </div>
              </div>
              <MdVerified style={{ fontSize: "2em", color: "blue" }} />
            </div>

            <div className="doctor_container">
              <div className="head_container">
                <div className="card_img">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="img"
                  />
                </div>
                <div>
                  <h3>name</h3>
                  <p>Pshychatrist</p>
                </div>
              </div>
              <MdVerified style={{ fontSize: "2em", color: "blue" }} />
            </div>
            </div>

            <div className="game_section">
            <div className="game_heading">
            <h2>Getting Bored? </h2>
            <h4 style={{color:'red'}}>Let's Play an intresting Game!</h4>
            </div>
            <div className="game_img">
            <img src="http://localhost:3000/images/rockpaper.jpg" alt="game_img" />
            </div>
            <div className="game_btn">
            <button><a href="https://partha6686.github.io/rock-paper-scissors/">Play Now</a></button>
            </div>
            </div>
        </div>

        {/* Middle*/}
        <div className="middle_div">
        <div className="card">
          <div className="head_container">
            <div className="card_img">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="img"
              />
            </div>
            <div>
              <h3>name</h3>
              <p>Pshychatrist</p>
            </div>
          </div>
          <hr />
          <div className="card_desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eos
              animi quis itaque expedita minus adipisci, veritatis voluptates
              architecto. Ab architecto assumenda incidunt. Eveniet quibusdam
              ipsam tenetur temporibus. Est maxime ipsam debitis facilis,
              maiores dolorem dolores neque numquam amet. Nesciunt!
            </p>
          </div>
          <hr />
          <div className="like_comm">
            <div>
              <BiLike style={{ fontSize: "2em" }} />
            </div>
            <div>
              <BiCommentDetail style={{ fontSize: "2em" }} />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="head_container">
            <div className="card_img">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="img"
              />
            </div>
            <div>
              <h3>name</h3>
              <p>Pshychatrist</p>
            </div>
          </div>
          <hr />
          <div className="card_desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eos
              animi quis itaque expedita minus adipisci, veritatis voluptates
              architecto. Ab architecto assumenda incidunt. Eveniet quibusdam
              ipsam tenetur temporibus. Est maxime ipsam debitis facilis,
              maiores dolorem dolores neque numquam amet. Nesciunt!
            </p>
          </div>
          <hr />
          <div className="like_comm">
            <div>
              <BiLike style={{ fontSize: "2em" }} />
            </div>
            <div>
              <BiCommentDetail style={{ fontSize: "2em" }} />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="head_container">
            <div className="card_img">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="img"
              />
            </div>
            <div>
              <h3>name</h3>
              <p>Pshychatrist</p>
            </div>
          </div>
          <hr />
          <div className="card_desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eos
              animi quis itaque expedita minus adipisci, veritatis voluptates
              architecto. Ab architecto assumenda incidunt. Eveniet quibusdam
              ipsam tenetur temporibus. Est maxime ipsam debitis facilis,
              maiores dolorem dolores neque numquam amet. Nesciunt!
            </p>
          </div>
          <hr />
          <div className="like_comm">
            <div>
              <BiLike style={{ fontSize: "2em" }} />
            </div>
            <div>
              <BiCommentDetail style={{ fontSize: "2em" }} />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="head_container">
            <div className="card_img">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="img"
              />
            </div>
            <div>
              <h3>name</h3>
              <p>Pshychatrist</p>
            </div>
          </div>
          <hr />
          <div className="card_desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eos
              animi quis itaque expedita minus adipisci, veritatis voluptates
              architecto. Ab architecto assumenda incidunt. Eveniet quibusdam
              ipsam tenetur temporibus. Est maxime ipsam debitis facilis,
              maiores dolorem dolores neque numquam amet. Nesciunt!
            </p>
          </div>
          <hr />
          <div className="like_comm">
            <div>
              <BiLike style={{ fontSize: "2em" }} />
            </div>
            <div>
              <BiCommentDetail style={{ fontSize: "2em" }} />
            </div>
          </div>
        </div>


        </div>

        {/*Right*/}
        <div className="right_div">
          <div className="spnsored">
            <div className="spons_heading">
              <h2>Sponsored</h2>
              <p>Create Ad</p>
            </div>
            <div className="s_card">
              <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
              <div className="s_card_body">
                <h2>Mika cosmetics</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <h5>micacosmetics.com</h5>
              </div>
            </div>
          </div>
          <div className="frnd_list">
            <h2 style={{ fontSize: "1.8rem" }}>Friend List</h2>
            <div className="friend_container">
              <div className="head_container">
                <div className="card_img">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="img"
                  />
                </div>
                <div>
                  <h3>name</h3>
                  <p>Pshychatrist</p>
                </div>
              </div>
              <div>
                <AiOutlineUserAdd style={{ fontSize: "2em" }} />
              </div>
            </div>

            <div className="friend_container">
              <div className="head_container">
                <div className="card_img">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="img"
                  />
                </div>
                <div>
                  <h3>name</h3>
                  <p>Pshychatrist</p>
                </div>
              </div>
              <div>
                <AiOutlineUserAdd style={{ fontSize: "2em" }} />
              </div>
            </div>

            <div className="friend_container">
              <div className="head_container">
                <div className="card_img">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="img"
                  />
                </div>
                <div>
                  <h3>name</h3>
                  <p>Pshychatrist</p>
                </div>
              </div>
              <div>
                <AiOutlineUserAdd style={{ fontSize: "2em" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

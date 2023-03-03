import React, { useContext, useEffect, useState } from "react";
import "../css/card.css";

import { AiOutlineUserAdd } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { UserContext } from "../context/userState";
import Navbar from "./Navbar";
import PostCard from "./PostCard";

const Home = () => {
  const userCtx = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [rDocs, setRDocs] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/post`, {
      method: "GET",
    });
    let json = await response.json();
    if (response.status === 200) {
      setPosts([...json.post]);
    } else {
      setPosts({});
    }
  };

  const addPost = async () => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/post/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "",
        title: newPost,
        description: "",
        file: "",
        email: "",
      }),
    });
    let json = await response.json();
    // console.log(json.post);
    // if (response.status === 200) {
    //   setPosts([...json.post]);
    // } else {
    //   setPosts({});
    // }
    fetchPosts();
  };
  const fetchDocs = async () => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/doctor/all`, {
      method: "GET",
    });
    let json = await response.json();
    console.log(json);
    if (response.status === 200) {
      setRDocs([...json.doctor]);
    } else {
      setRDocs([]);
    }
  };
  useEffect(() => {
    fetchPosts();
    fetchDocs();
  }, []);
  return (
    <div style={{ color: "#45f3ff" }}>
      <Navbar />
      <div className="main">
        <div className="left_div">
          <div className="popular_doctors">
            <h2>Recommended Doctors</h2>
            {rDocs.map((m) => (
              <div className="doctor_container" key={m._id}>
                <div className="head_container">
                  <div className="card_img">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "14px" }}>{m.name}</h3>
                    <p style={{ fontSize: "12px" }}>{m.jobtitle}</p>
                  </div>
                </div>
                <MdVerified style={{ fontSize: "2em", color: "blue" }} />
              </div>
            ))}
          </div>

          <div className="game_section">
            <div className="game_heading">
              <h2>Getting Bored? </h2>
              <h4 style={{ color: "red" }}>Let's Play an intresting Game!</h4>
            </div>
            <div className="game_img">
              <img
                src="http://localhost:3001/images/rockpaper.jpg"
                alt="game_img"
              />
            </div>
            <div className="game_btn">
              <button>
                <a
                  href="https://partha6686.github.io/rock-paper-scissors/"
                  target="_blank"
                >
                  Play Now
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Middle*/}
        <div className="middle_div">
          <div className="addpost">
            <div className="head_container">
              <div className="card_img">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="img"
                />
              </div>
              <div>
                {/*<h3>{userCtx.user ? userCtx.user.username : "Anonymous"}</h3>*/}
                <h3>Anonymous_228</h3>
              </div>
            </div>

            <div className="postarea">
              <div>
                <textarea
                  name="addpost"
                  id=""
                  cols="90"
                  rows="10"
                  placeholder="Create a new post!... "
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                ></textarea>
              </div>
              <div className="game_btn">
                <button type="">Post</button>
              </div>
            </div>
          </div>

          {posts.map((m) => (
            <PostCard m={m} key={m._id} />
          ))}
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
                  <h3>Dr. John Doe</h3>
                  <p>Psychiatrist</p>
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
                  <h3>Anonymous_228</h3>
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
                  <h3>Anonymous_228</h3>
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

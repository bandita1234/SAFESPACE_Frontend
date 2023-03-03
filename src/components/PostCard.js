import React, { useState } from "react";
import { BiLike, BiCommentDetail } from "react-icons/bi";

const PostCard = ({ m }) => {
  const [like, setLike] = useState(0);
  return (
    <div className="card">
      <div className="head_container">
        <div className="card_img">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="img"
          />
        </div>
        <div>
          <h3>Anonymous_345</h3>
        </div>
      </div>
      <hr />
      <div className="card_desc">
        <p>{m.description}</p>
      </div>
      <hr />
      <div className="like_comm">
        <div>
          {like}{" "}
          <BiLike
            style={{ fontSize: "2em" }}
            onClick={() => setLike(like + 1)}
          />
        </div>
        <div>
          <BiCommentDetail style={{ fontSize: "2em" }} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;

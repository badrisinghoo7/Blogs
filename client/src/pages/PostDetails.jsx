import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnails from "../images/blog15.jpg";

const PostDetails = () => {
  return (
    <section className="post-details">
      <div className="container post-details_container">
        <div className="post-details_header">
          <PostAuthor />
          <div className="post-detals_buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-details_thumbnail">
          <img src={Thumbnails} alt="no image" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt,
          error, officia rerum odio optio inventore animi labore eum minima
          culpa exercitationem perspiciatis maiores totam, impedit molestiae
          facere aliquam aperiam? Laudantium provident rerum aut fugit dolorem
          repudiandae, sed dignissimos sunt culpa odio quae aspernatur
          voluptates excepturi, et consequuntur error porro eius maxime neque,
          laboriosam aperiam dolorum? Perferendis nisi architecto libero!
          Quisquam radipisci mollitia debitis totam laudantium maiores deserunt
          expedita officiis corporis neque labore asperiores unde sit, dolores
          nemo repellat. Ratione fuga nesciunt quibusdam porro illo consequuntur
          corporis fugiat eius.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quam iure perferendis at, laborum earum omnis aut cupiditate deserunt
          voluptate suscipit maiores! Magnam, sit. Consequatur cum quis quae
          tempora iste? Commodi iste ratione ea voluptatibus tempora natus
          perspiciatis aut explicabo ut, architecto laborum eos accusantium
          laudantium odit inventore eius, in sapiente nemo distinctio numquam
          corporis laboriosam dolorum soluta beatae? Facilis. Blanditiis magnam
          ducimus doloremque nesciunt rem delectus corrupti culpa minima,
          quibusdam placeat natus ea dignissimos odio tenetur eaque quasi ullam
          quidem, explicabo consectetur? Adipisci, a maiores soluta odit magni
          commodi. Sint nostrum quasi qui, voluptatibus quis exercitationem
          molestias quam recusandae nulla incidunt sapiente cupiditate dolorem
          ipsa provident eius pariatur tenetur optio consequuntur saepe culpa
          repellendus reiciendis atque molestiae debitis. Minima! Corporis
          laboriosam temporibus commodi adipisci voluptatibus, ab molestiae et,
          amet magnam esse nemo atque ad ut numquam reprehenderit assumenda quas
          iusto dolorem dolores libero accusantium! Veritatis libero dolor
          dignissimos aspernatur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in
          libero hic nostrum ipsam laboriosam exercitationem temporibus,
          voluptates aliquam cupiditate dolor consectetur aspernatur facere
          beatae voluptatibus, totam dolorum dolores perferendis? Quo aliquid
          omnis rerum officiis, amet odit animi voluptatum atque ipsam assumenda
          ullam minus quisquam at hic? Perferendis libero reiciendis vitae?
          Maxime sequi amet magnam vitae! Ea repudiandae earum ipsam. Blanditiis
          reiciendis tempora esse ut asperiores consectetur, incidunt harum
          voluptates quos obcaecati quisquam et cupiditate eum facilis,
          molestias deleniti facere ipsum illo atque, qui quas eius doloremque
          soluta? Quasi, iste.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
          laboriosam velit soluta vitae, sunt maxime ab maiores. Reiciendis
          aperiam laborum hic, atque corporis praesentium pariatur sequi
          consequatur nostrum fugit in? Necessitatibus omnis nisi itaque ea
          aliquam, neque est culpa, mollitia architecto esse suscipit labore
          doloremque qui iure. Id distinctio voluptatem voluptate, repellat
          optio ipsum, officiis aut eum tempore accusamus alias.
        </p>
      </div>
    </section>
  );
};

export default PostDetails;

"use client";

import { useParams } from 'next/navigation'
import axios from "axios";

interface Post {
  _id: string;
  avatar: string;
  name: string;
  createdAt: string;
  title: string;
}



const getAllPost = async (id: any) => {
  try {
    // const res = await axios.get(`http://localhost:3000/api/post/${id}`);
    // // console.log(res.data);
    // return res.data.allPost;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array if there's an error
  }
};

export default async function BlogId() {
  // const params = useParams<{ tag: string; item: string }>()
  // console.log(`PARAM: ====> `,params)

  //   const allPost: Post[] = await getAllPost(id);

  const params = useParams<{ tag: string; item: string }>()
  console.log(`PARAMS:===>`,params)

  return (
    <div>
      <img
        src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
        alt=""
        className="w-full h-auto max-w-md"
      />

      <div className="lg:mx-32 md:mx-20">
        <p className="font-bold text-4xl">THIS IS TITLE</p>
        <div className="flex">
          <p>Written by John Doe</p>
          <p>createdAt</p>
        </div>
        {/* Blog Detail */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde
          expedita possimus accusantium amet rerum labore repellat facere ea
          provident soluta voluptates, ullam dicta officiis suscipit recusandae
          enim dolores vitae magni quaerat optio. Est, unde. Repellendus
          molestias, eveniet tenetur hic veniam id reprehenderit neque, quo
          mollitia eos eum, quam iusto repudiandae minus. Cum distinctio
          doloremque quaerat explicabo porro, necessitatibus incidunt est
          nostrum expedita voluptate suscipit aut facere iste a quisquam,
          laborum molestias saepe sapiente architecto. Deleniti quidem,
          laudantium veniam voluptatibus explicabo quam id. Eaque minima
          architecto assumenda velit itaque dolores voluptatum porro sapiente
          voluptatem illum ab aperiam voluptas iure ea, quae fugit culpa optio a
          et blanditiis modi aspernatur! Debitis omnis necessitatibus, nam dolor
          aperiam suscipit doloribus autem eligendi fuga in dicta rem animi
          distinctio ducimus fugiat? Quia, inventore libero impedit et animi non
          iusto doloremque dolore quasi eaque incidunt vel voluptatibus?
          Recusandae atque voluptatum reiciendis adipisci dicta nam. Voluptatem
          iste tenetur velit illo repellendus ipsa blanditiis, autem neque ut
          maiores quibusdam cupiditate reprehenderit molestias itaque
          accusantium omnis obcaecati quisquam quo totam! Nesciunt ex excepturi,
          dolorem eaque voluptates quidem assumenda autem ut, adipisci ab
          tempore eligendi repudiandae earum nisi, molestiae culpa dolore? Culpa
          impedit veritatis expedita. Aperiam iste eaque reprehenderit modi
          minus corporis facilis consequuntur voluptas aliquid quaerat, itaque
          ex repellat voluptate maiores architecto deleniti impedit in
          quibusdam, velit qui aut quos ea. Provident eligendi neque, quod
          aperiam doloremque possimus. Quidem a dicta nemo eos accusantium ipsum
          aut quos tenetur saepe sed omnis, officia explicabo, recusandae
          veritatis vel molestias provident dignissimos officiis modi illum!
          Praesentium beatae exercitationem ad ipsum, nesciunt quaerat! Hic aut
          vel voluptatum consectetur excepturi eveniet itaque fugit, rem et,
          accusamus, magnam facere iste molestiae pariatur expedita. Repudiandae
          perspiciatis eum possimus qui! Labore doloribus veniam quisquam amet
          totam ducimus repellendus similique ad! Dolor natus non qui eos
          eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores, nisi mollitia sapiente incidunt provident odit. Saepe aliquam
          iste rerum vero, quis ea natus, illum facilis sed beatae obcaecati
          similique suscipit atque reprehenderit ratione ipsa harum nemo, sit
          maxime impedit. Ducimus consectetur nam placeat vero quod quidem ea
          beatae sed neque ullam pariatur, quo error similique labore. Provident
          numquam assumenda dolores fuga minima quidem nesciunt odio earum
          maxime! Deserunt eos dignissimos incidunt minus ullam voluptas!
          Consequatur modi sed quas corporis id eius illum, officiis harum,
          ducimus nihil incidunt ad, non beatae sapiente! Explicabo sapiente
          minus magnam, aut, provident, ut quasi tempora possimus vel laboriosam
          aliquam fugiat? Nesciunt deleniti illo repudiandae commodi quibusdam
          totam debitis, sint quae, iusto, recusandae qui magni reiciendis
          cumque voluptates? Voluptas amet enim qui porro animi praesentium
          molestias dolore corporis explicabo, ratione perferendis est in
          sapiente laborum sed provident consequatur suscipit inventore neque?
          Vero est possimus ipsa nemo qui facilis, maxime, ex repellat voluptas
          placeat repellendus voluptates. Quasi ratione dolores numquam cum
          animi nulla suscipit quis libero, nemo ab a amet dignissimos officiis
          id placeat dicta earum quibusdam ex quam odit est at nobis enim. Saepe
          reprehenderit dolorem, natus recusandae quaerat rem fugit sunt alias
          veniam. Aut architecto dolore alias quia. Voluptate tenetur, officia
          at possimus enim animi amet minus ducimus, fugiat atque optio
          obcaecati blanditiis iure nemo aspernatur excepturi qui nulla nesciunt
          dignissimos facere deserunt nobis! Autem illum ipsam atque reiciendis,
          fugit ex possimus laboriosam obcaecati vel doloremque quo
          reprehenderit? Architecto animi facere tenetur vero dolores ab
          voluptatibus, a officia placeat nobis? Eos, a. Maxime, nobis culpa?
          Esse, error veritatis, quisquam excepturi molestias voluptas libero,
          labore inventore vitae maiores sint adipisci necessitatibus! Ducimus
          excepturi consequatur modi quidem culpa molestiae debitis quas ullam
          delectus illum aliquid distinctio, sapiente nulla illo deleniti, ex
          sunt assumenda inventore fugiat cupiditate repudiandae.
        </p>
      </div>
    </div>
  );
}

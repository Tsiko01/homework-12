import { createContext, useState } from "react";

export const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "React",
      description: "React swavla aris dzalian saitereso male sakutar saisac avawyob Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo possimus et aspernatur quasi, debitis rerum aut reiciendis sapiente qui ipsum, culpa consectetur veritatis cumque excepturi hic explicabo, commodi deleniti accusantium consequuntur vitae fugiat? Maiores quis quaerat saepe, voluptatum aperiam nostrum numquam impedit dicta deserunt ipsum laboriosam sit. Odio dignissimos architecto ullam at inventore aperiam assumenda impedit maxime, sapiente eveniet! Fuga minus nesciunt blanditiis? Provident neque excepturi porro necessitatibus ex distinctio, explicabo sapiente enim itaque reprehenderit! Necessitatibus, animi hic fugiat, porro dolore explicabo earum nulla harum ex aspernatur assumenda incidunt? Sapiente accusantium optio tempore eveniet natus, quis sequi atque, ipsa tenetur quisquam cum! Voluptates, voluptas adipisci pariatur modi minima voluptatibus iure vel atque, optio unde, dolore inventore nemo enim tempore in! Cupiditate non pariatur, voluptate voluptatem minus velit iure sed, perspiciatis sequi aperiam minima. Obcaecati ex provident quam nisi ad doloribus beatae reiciendis harum. Impedit quos porro aut necessitatibus non delectus voluptates voluptas omnis, commodi facere harum reiciendis perferendis illum numquam? Blanditiis, aperiam quasi laudantium recusandae doloribus voluptas ea, veniam vel voluptate expedita illum architecto voluptatum omnis hic. Fugit laboriosam, molestiae commodi veniam neque alias, nulla, sint mollitia tempore tenetur dolorum consequuntur ducimus? Temporibus quidem iusto recusandae ab sapiente dolores, eveniet dignissimos iure assumenda et. Veniam odit nostrum unde ipsa corrupti, voluptatum, aut aliquid autem iusto totam alias dolorum deleniti aliquam assumenda a cumque. Sed consequatur a, sequi adipisci ut odio tempora? Beatae illum sint, repudiandae ipsum doloremque consequuntur in possimus nemo placeat, id consectetur obcaecati. Tempore sint perspiciatis vero architecto est obcaecati laudantium dolore aliquam ut, numquam, cum cumque repellendus nesciunt nisi commodi eos accusantium! Odio ad odit in provident quo dolor! Sit ab, omnis perferendis voluptate ipsum veniam velit earum soluta fuga at porro, asperiores voluptates nemo tempore illum vel! Exercitationem explicabo, voluptatibus omnis corrupti impedit distinctio sit.",
    },
    {
      id: 2,
      title: "JavaScript Blog",
      description: "JavaScript aris dzalian sawiro faqtiyrad tu ici JavaScript martivad iswavli react Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea repellat unde! Accusamus optio nostrum nihil molestias at doloremque sed ipsum nemo atque distinctio amet unde quisquam commodi repellendus vero quos, officia provident sit. Atque vitae hic tempore sint dolorum earum inventore rem, corrupti labore iusto laboriosam autem enim et omnis nesciunt suscipit animi a aperiam officiis? Maxime molestiae nisi accusamus non laboriosam voluptatum? Maiores maxime eligendi, veniam laboriosam qui, dolorum voluptates illo itaque nobis harum culpa odio corrupti voluptate. Eum, nulla! Quis distinctio nisi, nemo, et illum enim quia quasi commodi laboriosam harum hic architecto accusamus nesciunt! Fugiat nihil quasi, suscipit amet quia beatae earum possimus veniam blanditiis laborum voluptatem, maxime quo rerum odit itaque delectus at dolore! Earum dolorem fugit dicta dolores fugiat dolore. Autem dolorum aperiam sunt, sed omnis perferendis quia enim at saepe quaerat vel, optio fuga molestiae mollitia beatae magnam quisquam inventore nihil repellendus nostrum, cum delectus dignissimos numquam. Dolor quod iusto sed tenetur sit enim sequi repellendus ut excepturi officiis voluptatum, assumenda, dolores, deleniti nobis nihil quos provident ipsum laudantium. Blanditiis similique reiciendis veritatis repellendus quaerat, nostrum illo explicabo nisi facilis et, est, iste quibusdam! Cum voluptate minus nam architecto necessitatibus veniam! Quisquam, optio!",
    },
  ]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
}
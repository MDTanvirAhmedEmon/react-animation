
import { motion, useScroll, useTransform } from "framer-motion";

function Scroll() {  
  const { scrollYProgress } = useScroll();
  const color = useTransform(
    scrollYProgress,
    [0, 0.50, 1],
    ['rgb(245, 66, 75)', 'rgb(153, 66, 245)', 'rgb(66, 209, 245)']
  );


  return (
    <div className=" w-[1100px] mx-auto">
      <motion.div style={{scaleX: scrollYProgress, transformOrigin: 'left', background: color}} className={`py-4 sticky top-0`}></motion.div>
      <motion.div>
        <motion.p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ad
          eaque voluptatum temporibus debitis. Animi cumque consectetur hic eius
          sed commodi aperiam? Optio magni praesentium, cum modi rerum nostrum
          quos dignissimos ab laborum consequatur delectus odio molestiae ad
          fugit eligendi, eaque doloribus. Impedit nesciunt nisi ea sit
          eligendi, aut voluptates sed doloremque ipsum id, nam neque magni
          reiciendis? Totam quod perferendis impedit nam alias nisi rerum
          obcaecati ipsa et aliquid eaque error rem esse doloremque fugiat
          deleniti placeat eligendi, necessitatibus voluptate, iure cupiditate
          praesentium vel repellendus! Quod officia eligendi totam atque
          voluptatum animi, ex quis, neque, ullam provident iste. Nemo!
        </motion.p>
        <motion.p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          autem est, officia accusantium, culpa rerum animi obcaecati, sint
          laudantium soluta vel sapiente esse beatae odit doloremque voluptatum
          nulla ullam libero nam facere repellat? Aspernatur quasi illum officia
          magnam dolorum iste praesentium tempore earum nesciunt harum omnis,
          fuga voluptatum nostrum eius vel atque! Omnis ipsum necessitatibus
          accusantium placeat accusamus et sequi labore quas, quod alias
          pariatur minima quo autem vel! Odio nobis ipsum debitis nulla corrupti
          accusamus molestias eligendi amet commodi voluptatem eos iusto sed
          sequi accusantium temporibus illo mollitia, quidem non a harum iste
          praesentium quo ut suscipit? Aut dolorem vitae cupiditate sint iusto
          delectus velit, deleniti rem atque incidunt, est autem optio sed,
          eveniet natus blanditiis. Autem quia recusandae reiciendis. Vero
          asperiores amet, maiores ullam corrupti eos nobis praesentium
          molestiae? Necessitatibus odio tempore corrupti excepturi vel, sunt
          ducimus officiis neque ad sed cumque at veniam cupiditate inventore
          cum aut explicabo blanditiis voluptatem ab asperiores quisquam sint
          nulla quia placeat? Atque eos, sequi excepturi delectus autem possimus
          sed quos ullam corrupti quis suscipit voluptatibus laboriosam nemo,
          illo aspernatur alias ex adipisci fuga. Tenetur, non esse eaque
          quibusdam nam eos veritatis harum est delectus placeat distinctio
          beatae tempore unde eveniet architecto.
        </motion.p>
        <motion.p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          cupiditate architecto natus voluptas molestias sint, odio illo eum
          facilis praesentium dicta laudantium quo, tenetur, quas at eligendi?
          Vero consequuntur sapiente totam quae recusandae impedit similique
          nulla eligendi laborum. Aut vitae exercitationem sint fugit obcaecati
          aperiam sequi, cum esse eos praesentium, excepturi voluptate pariatur
          ad dolor, blanditiis delectus perspiciatis amet. Consequatur quas
          totam id dolorum quibusdam distinctio assumenda asperiores, alias
          officia? Excepturi esse iusto distinctio. Cupiditate dolorem sit nam
          dolor adipisci cum ipsa, veritatis saepe, enim, molestiae dolore sunt!
          Iure tempore ut magni delectus, at, ipsam repudiandae rem earum
          possimus omnis dolorum! Rem sequi blanditiis soluta tenetur. Magnam
          quisquam libero eum quibusdam facilis animi in hic at! Fugiat velit
          magnam dignissimos, earum ad molestias minus laudantium quos, facilis
          nisi pariatur est quod quia officia vero repellat iste recusandae
          ipsum natus rem debitis. Iure, eveniet quam placeat sed, alias nam
          nobis consequuntur, quas eos expedita praesentium. Est recusandae
          voluptatibus enim odit ipsam autem! Assumenda esse ea eveniet. Quod
          aspernatur accusamus iusto nobis commodi deserunt alias, a
          repudiandae, suscipit nisi numquam! Consequatur, vitae minus a
          deleniti nostrum ad aliquam! Culpa odio exercitationem at cumque eius
          quos dignissimos, aut ad quisquam possimus, ratione sint et asperiores
          ea, optio minima nesciunt debitis repellendus. Omnis fugiat saepe odit
          non possimus! Provident perspiciatis saepe blanditiis animi ab vero
          unde fugiat laborum, facilis quod. Officiis dignissimos error odio,
          fugiat, iste, reprehenderit delectus voluptates dolore molestias
          voluptatum sint quas quisquam! Beatae aspernatur consequatur tenetur
          earum velit labore vel nobis? Facere, dolores perspiciatis id illo,
          dolorum esse quam quis voluptatum aperiam quae sequi molestiae
          repudiandae qui, beatae assumenda ad! Unde explicabo dicta facilis
          delectus culpa doloremque optio nesciunt fugiat voluptatibus excepturi
          labore quasi laborum inventore ipsam qui numquam consequatur
          necessitatibus tempore, officiis illum quaerat rerum pariatur id.
          Commodi magni nobis delectus, tenetur deleniti blanditiis
          necessitatibus dolor eius odit cumque consequatur quia autem modi,
          beatae iste reprehenderit sint, dicta molestias unde dolorum amet
          aspernatur dignissimos laudantium repellendus. Dignissimos excepturi
          quia nisi voluptatem iure placeat recusandae quod omnis quaerat minus,
          quidem quis ipsum id ratione molestiae mollitia consequuntur
          laudantium, culpa reprehenderit? Consectetur.
        </motion.p>
        <motion.p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          autem est, officia accusantium, culpa rerum animi obcaecati, sint
          laudantium soluta vel sapiente esse beatae odit doloremque voluptatum
          nulla ullam libero nam facere repellat? Aspernatur quasi illum officia
          magnam dolorum iste praesentium tempore earum nesciunt harum omnis,
          fuga voluptatum nostrum eius vel atque! Omnis ipsum necessitatibus
          accusantium placeat accusamus et sequi labore quas, quod alias
          pariatur minima quo autem vel! Odio nobis ipsum debitis nulla corrupti
          accusamus molestias eligendi amet commodi voluptatem eos iusto sed
          sequi accusantium temporibus illo mollitia, quidem non a harum iste
          praesentium quo ut suscipit? Aut dolorem vitae cupiditate sint iusto
          delectus velit, deleniti rem atque incidunt, est autem optio sed,
          eveniet natus blanditiis. Autem quia recusandae reiciendis. Vero
          asperiores amet, maiores ullam corrupti eos nobis praesentium
          molestiae? Necessitatibus odio tempore corrupti excepturi vel, sunt
          ducimus officiis neque ad sed cumque at veniam cupiditate inventore
          cum aut explicabo blanditiis voluptatem ab asperiores quisquam sint
          nulla quia placeat? Atque eos, sequi excepturi delectus autem possimus
          sed quos ullam corrupti quis suscipit voluptatibus laboriosam nemo,
          illo aspernatur alias ex adipisci fuga. Tenetur, non esse eaque
          quibusdam nam eos veritatis harum est delectus placeat distinctio
          beatae tempore unde eveniet architecto.
        </motion.p>
        <motion.p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          cupiditate architecto natus voluptas molestias sint, odio illo eum
          facilis praesentium dicta laudantium quo, tenetur, quas at eligendi?
          Vero consequuntur sapiente totam quae recusandae impedit similique
          nulla eligendi laborum. Aut vitae exercitationem sint fugit obcaecati
          aperiam sequi, cum esse eos praesentium, excepturi voluptate pariatur
          ad dolor, blanditiis delectus perspiciatis amet. Consequatur quas
          totam id dolorum quibusdam distinctio assumenda asperiores, alias
          officia? Excepturi esse iusto distinctio. Cupiditate dolorem sit nam
          dolor adipisci cum ipsa, veritatis saepe, enim, molestiae dolore sunt!
          Iure tempore ut magni delectus, at, ipsam repudiandae rem earum
          possimus omnis dolorum! Rem sequi blanditiis soluta tenetur. Magnam
          quisquam libero eum quibusdam facilis animi in hic at! Fugiat velit
          magnam dignissimos, earum ad molestias minus laudantium quos, facilis
          nisi pariatur est quod quia officia vero repellat iste recusandae
          ipsum natus rem debitis. Iure, eveniet quam placeat sed, alias nam
          nobis consequuntur, quas eos expedita praesentium. Est recusandae
          voluptatibus enim odit ipsam autem! Assumenda esse ea eveniet. Quod
          aspernatur accusamus iusto nobis commodi deserunt alias, a
          repudiandae, suscipit nisi numquam! Consequatur, vitae minus a
          deleniti nostrum ad aliquam! Culpa odio exercitationem at cumque eius
          quos dignissimos, aut ad quisquam possimus, ratione sint et asperiores
          ea, optio minima nesciunt debitis repellendus. Omnis fugiat saepe odit
          non possimus! Provident perspiciatis saepe blanditiis animi ab vero
          unde fugiat laborum, facilis quod. Officiis dignissimos error odio,
          fugiat, iste, reprehenderit delectus voluptates dolore molestias
          voluptatum sint quas quisquam! Beatae aspernatur consequatur tenetur
          earum velit labore vel nobis? Facere, dolores perspiciatis id illo,
          dolorum esse quam quis voluptatum aperiam quae sequi molestiae
          repudiandae qui, beatae assumenda ad! Unde explicabo dicta facilis
          delectus culpa doloremque optio nesciunt fugiat voluptatibus excepturi
          labore quasi laborum inventore ipsam qui numquam consequatur
          necessitatibus tempore, officiis illum quaerat rerum pariatur id.
          Commodi magni nobis delectus, tenetur deleniti blanditiis
          necessitatibus dolor eius odit cumque consequatur quia autem modi,
          beatae iste reprehenderit sint, dicta molestias unde dolorum amet
          aspernatur dignissimos laudantium repellendus. Dignissimos excepturi
          quia nisi voluptatem iure placeat recusandae quod omnis quaerat minus,
          quidem quis ipsum id ratione molestiae mollitia consequuntur
          laudantium, culpa reprehenderit? Consectetur.
        </motion.p>
        <motion.p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          autem est, officia accusantium, culpa rerum animi obcaecati, sint
          laudantium soluta vel sapiente esse beatae odit doloremque voluptatum
          nulla ullam libero nam facere repellat? Aspernatur quasi illum officia
          magnam dolorum iste praesentium tempore earum nesciunt harum omnis,
          fuga voluptatum nostrum eius vel atque! Omnis ipsum necessitatibus
          accusantium placeat accusamus et sequi labore quas, quod alias
          pariatur minima quo autem vel! Odio nobis ipsum debitis nulla corrupti
          accusamus molestias eligendi amet commodi voluptatem eos iusto sed
          sequi accusantium temporibus illo mollitia, quidem non a harum iste
          praesentium quo ut suscipit? Aut dolorem vitae cupiditate sint iusto
          delectus velit, deleniti rem atque incidunt, est autem optio sed,
          eveniet natus blanditiis. Autem quia recusandae reiciendis. Vero
          asperiores amet, maiores ullam corrupti eos nobis praesentium
          molestiae? Necessitatibus odio tempore corrupti excepturi vel, sunt
          ducimus officiis neque ad sed cumque at veniam cupiditate inventore
          cum aut explicabo blanditiis voluptatem ab asperiores quisquam sint
          nulla quia placeat? Atque eos, sequi excepturi delectus autem possimus
          sed quos ullam corrupti quis suscipit voluptatibus laboriosam nemo,
          illo aspernatur alias ex adipisci fuga. Tenetur, non esse eaque
          quibusdam nam eos veritatis harum est delectus placeat distinctio
          beatae tempore unde eveniet architecto.
        </motion.p>
        <motion.p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          cupiditate architecto natus voluptas molestias sint, odio illo eum
          facilis praesentium dicta laudantium quo, tenetur, quas at eligendi?
          Vero consequuntur sapiente totam quae recusandae impedit similique
          nulla eligendi laborum. Aut vitae exercitationem sint fugit obcaecati
          aperiam sequi, cum esse eos praesentium, excepturi voluptate pariatur
          ad dolor, blanditiis delectus perspiciatis amet. Consequatur quas
          totam id dolorum quibusdam distinctio assumenda asperiores, alias
          officia? Excepturi esse iusto distinctio. Cupiditate dolorem sit nam
          dolor adipisci cum ipsa, veritatis saepe, enim, molestiae dolore sunt!
          Iure tempore ut magni delectus, at, ipsam repudiandae rem earum
          possimus omnis dolorum! Rem sequi blanditiis soluta tenetur. Magnam
          quisquam libero eum quibusdam facilis animi in hic at! Fugiat velit
          magnam dignissimos, earum ad molestias minus laudantium quos, facilis
          nisi pariatur est quod quia officia vero repellat iste recusandae
          ipsum natus rem debitis. Iure, eveniet quam placeat sed, alias nam
          nobis consequuntur, quas eos expedita praesentium. Est recusandae
          voluptatibus enim odit ipsam autem! Assumenda esse ea eveniet. Quod
          aspernatur accusamus iusto nobis commodi deserunt alias, a
          repudiandae, suscipit nisi numquam! Consequatur, vitae minus a
          deleniti nostrum ad aliquam! Culpa odio exercitationem at cumque eius
          quos dignissimos, aut ad quisquam possimus, ratione sint et asperiores
          ea, optio minima nesciunt debitis repellendus. Omnis fugiat saepe odit
          non possimus! Provident perspiciatis saepe blanditiis animi ab vero
          unde fugiat laborum, facilis quod. Officiis dignissimos error odio,
          fugiat, iste, reprehenderit delectus voluptates dolore molestias
          voluptatum sint quas quisquam! Beatae aspernatur consequatur tenetur
          earum velit labore vel nobis? Facere, dolores perspiciatis id illo,
          dolorum esse quam quis voluptatum aperiam quae sequi molestiae
          repudiandae qui, beatae assumenda ad! Unde explicabo dicta facilis
          delectus culpa doloremque optio nesciunt fugiat voluptatibus excepturi
          labore quasi laborum inventore ipsam qui numquam consequatur
          necessitatibus tempore, officiis illum quaerat rerum pariatur id.
          Commodi magni nobis delectus, tenetur deleniti blanditiis
          necessitatibus dolor eius odit cumque consequatur quia autem modi,
          beatae iste reprehenderit sint, dicta molestias unde dolorum amet
          aspernatur dignissimos laudantium repellendus. Dignissimos excepturi
          quia nisi voluptatem iure placeat recusandae quod omnis quaerat minus,
          quidem quis ipsum id ratione molestiae mollitia consequuntur
          laudantium, culpa reprehenderit? Consectetur.
        </motion.p>
        <motion.p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          autem est, officia accusantium, culpa rerum animi obcaecati, sint
          laudantium soluta vel sapiente esse beatae odit doloremque voluptatum
          nulla ullam libero nam facere repellat? Aspernatur quasi illum officia
          magnam dolorum iste praesentium tempore earum nesciunt harum omnis,
          fuga voluptatum nostrum eius vel atque! Omnis ipsum necessitatibus
          accusantium placeat accusamus et sequi labore quas, quod alias
          pariatur minima quo autem vel! Odio nobis ipsum debitis nulla corrupti
          accusamus molestias eligendi amet commodi voluptatem eos iusto sed
          sequi accusantium temporibus illo mollitia, quidem non a harum iste
          praesentium quo ut suscipit? Aut dolorem vitae cupiditate sint iusto
          delectus velit, deleniti rem atque incidunt, est autem optio sed,
          eveniet natus blanditiis. Autem quia recusandae reiciendis. Vero
          asperiores amet, maiores ullam corrupti eos nobis praesentium
          molestiae? Necessitatibus odio tempore corrupti excepturi vel, sunt
          ducimus officiis neque ad sed cumque at veniam cupiditate inventore
          cum aut explicabo blanditiis voluptatem ab asperiores quisquam sint
          nulla quia placeat? Atque eos, sequi excepturi delectus autem possimus
          sed quos ullam corrupti quis suscipit voluptatibus laboriosam nemo,
          illo aspernatur alias ex adipisci fuga. Tenetur, non esse eaque
          quibusdam nam eos veritatis harum est delectus placeat distinctio
          beatae tempore unde eveniet architecto.
        </motion.p>
        <motion.p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          cupiditate architecto natus voluptas molestias sint, odio illo eum
          facilis praesentium dicta laudantium quo, tenetur, quas at eligendi?
          Vero consequuntur sapiente totam quae recusandae impedit similique
          nulla eligendi laborum. Aut vitae exercitationem sint fugit obcaecati
          aperiam sequi, cum esse eos praesentium, excepturi voluptate pariatur
          ad dolor, blanditiis delectus perspiciatis amet. Consequatur quas
          totam id dolorum quibusdam distinctio assumenda asperiores, alias
          officia? Excepturi esse iusto distinctio. Cupiditate dolorem sit nam
          dolor adipisci cum ipsa, veritatis saepe, enim, molestiae dolore sunt!
          Iure tempore ut magni delectus, at, ipsam repudiandae rem earum
          possimus omnis dolorum! Rem sequi blanditiis soluta tenetur. Magnam
          quisquam libero eum quibusdam facilis animi in hic at! Fugiat velit
          magnam dignissimos, earum ad molestias minus laudantium quos, facilis
          nisi pariatur est quod quia officia vero repellat iste recusandae
          ipsum natus rem debitis. Iure, eveniet quam placeat sed, alias nam
          nobis consequuntur, quas eos expedita praesentium. Est recusandae
          voluptatibus enim odit ipsam autem! Assumenda esse ea eveniet. Quod
          aspernatur accusamus iusto nobis commodi deserunt alias, a
          repudiandae, suscipit nisi numquam! Consequatur, vitae minus a
          deleniti nostrum ad aliquam! Culpa odio exercitationem at cumque eius
          quos dignissimos, aut ad quisquam possimus, ratione sint et asperiores
          ea, optio minima nesciunt debitis repellendus. Omnis fugiat saepe odit
          non possimus! Provident perspiciatis saepe blanditiis animi ab vero
          unde fugiat laborum, facilis quod. Officiis dignissimos error odio,
          fugiat, iste, reprehenderit delectus voluptates dolore molestias
          voluptatum sint quas quisquam! Beatae aspernatur consequatur tenetur
          earum velit labore vel nobis? Facere, dolores perspiciatis id illo,
          dolorum esse quam quis voluptatum aperiam quae sequi molestiae
          repudiandae qui, beatae assumenda ad! Unde explicabo dicta facilis
          delectus culpa doloremque optio nesciunt fugiat voluptatibus excepturi
          labore quasi laborum inventore ipsam qui numquam consequatur
          necessitatibus tempore, officiis illum quaerat rerum pariatur id.
          Commodi magni nobis delectus, tenetur deleniti blanditiis
          necessitatibus dolor eius odit cumque consequatur quia autem modi,
          beatae iste reprehenderit sint, dicta molestias unde dolorum amet
          aspernatur dignissimos laudantium repellendus. Dignissimos excepturi
          quia nisi voluptatem iure placeat recusandae quod omnis quaerat minus,
          quidem quis ipsum id ratione molestiae mollitia consequuntur
          laudantium, culpa reprehenderit? Consectetur.
        </motion.p>
        <motion.p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          autem est, officia accusantium, culpa rerum animi obcaecati, sint
          laudantium soluta vel sapiente esse beatae odit doloremque voluptatum
          nulla ullam libero nam facere repellat? Aspernatur quasi illum officia
          magnam dolorum iste praesentium tempore earum nesciunt harum omnis,
          fuga voluptatum nostrum eius vel atque! Omnis ipsum necessitatibus
          accusantium placeat accusamus et sequi labore quas, quod alias
          pariatur minima quo autem vel! Odio nobis ipsum debitis nulla corrupti
          accusamus molestias eligendi amet commodi voluptatem eos iusto sed
          sequi accusantium temporibus illo mollitia, quidem non a harum iste
          praesentium quo ut suscipit? Aut dolorem vitae cupiditate sint iusto
          delectus velit, deleniti rem atque incidunt, est autem optio sed,
          eveniet natus blanditiis. Autem quia recusandae reiciendis. Vero
          asperiores amet, maiores ullam corrupti eos nobis praesentium
          molestiae? Necessitatibus odio tempore corrupti excepturi vel, sunt
          ducimus officiis neque ad sed cumque at veniam cupiditate inventore
          cum aut explicabo blanditiis voluptatem ab asperiores quisquam sint
          nulla quia placeat? Atque eos, sequi excepturi delectus autem possimus
          sed quos ullam corrupti quis suscipit voluptatibus laboriosam nemo,
          illo aspernatur alias ex adipisci fuga. Tenetur, non esse eaque
          quibusdam nam eos veritatis harum est delectus placeat distinctio
          beatae tempore unde eveniet architecto.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Scroll;

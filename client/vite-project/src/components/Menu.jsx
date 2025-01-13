import React from 'react'

const Menu = () => {

    const posts = [
        {
          id:1,
          title: "Trouvez et téléchargez les photos Africa Pattern.",
          desc: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla",
          img: "https://i.pinimg.com/736x/2c/f1/f5/2cf1f5fbf04051b859a2b7eeebb29b16.jpg",
        },
    
        {
          id:2,
          title: "AI nuclear energy, future innovation of disruptive technology.",
          desc: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla",
          img: "https://i.pinimg.com/736x/7c/8a/5c/7c8a5cc61e919dc25eb1a794460b735d.jpg",
        },
    
        {
          id:3,
          title: "Trouvez et téléchargez les photos Africa Pattern.",
          desc: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla",
          img: "https://i.pinimg.com/736x/1e/92/70/1e92708d4c30a0c225cd6e2a8d6aac8b.jpg",
        },
    
        {
          id:4,
          title: "AI nuclear energy, future innovation of disruptive technology.",
          desc: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla",
          img: "https://i.pinimg.com/736x/7c/8a/5c/7c8a5cc61e919dc25eb1a794460b735d.jpg",
        },
    
        {
          id:5,
          title: "Trouvez et téléchargez les photos Africa Pattern.",
          desc: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla",
          img: "https://i.pinimg.com/736x/2c/f1/f5/2cf1f5fbf04051b859a2b7eeebb29b16.jpg",
        },
    
        {
          id:6,
          title: "AI nuclear energy, future innovation of disruptive technology.",
          desc: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla",
          img: "https://i.pinimg.com/736x/1e/92/70/1e92708d4c30a0c225cd6e2a8d6aac8b.jpg",
        },
      ]

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map((post) => (
            <div className='post' key={post.id}>
                <img src={post.img} alt='' />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu
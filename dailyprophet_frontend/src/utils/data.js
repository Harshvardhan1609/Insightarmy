export const userQuery =  (userId) => {
    const query = `*[ _type == "user" &&  _id == '${userId}']`;

    return query;  
}
export const pinDetailQuery = (pinId) => {
    const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
      projects{
        asset->{
          url
        }
      },
    }`;
    return query;
  };
  
  export const pinDetailMorePinQuery = (pin) => {
    const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  

export const searchQuery = (searchTerm) => {
    const query  = `*[_type=="pin" && title match '${searchTerm}*' || category match '${searchTerm}*'|| about match '${searchTerm}*' ]{
        image {
            asset -> {
                url
            }
        },
        _id,
        destination,
        postedBy -> {
            _id,
            userName,
            image
        },
        save[] {
            _keys,
            postedBy -> {
                _id,
                userName,
                image
            },
        },
    }`

    return query

}

export const feedQuery = `*[_type=='pin'] | order(_createAt desc) {
    image {
        asset -> {
            url
        }
    },
    _id,
    destination,
    postedBy -> {
        _id,
        userName,
        image
    },
    save[] {
        _keys,
        postedBy -> {
            _id,
            userName,
            image
        },
    },
}`

export const categories = [
    {
      name: 'Software Projects',
      image: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg',
    },
    {
      name: 'Hardware Projects',
      image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/97975689/original/1e2146ef275f67395263694dd4588a6329aef66f/do-avr-embedded-systems-projects.jpg',
    },
    {
      name: 'Android Projects',
      image: 'https://engineering.fb.com/wp-content/uploads/2013/03/andy-lg.png',
    },
    {
      name: 'IOT Projects',
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/IoT_Projects.jpg',
    },
    {
      name: 'Web Projects',
      image: 'https://nickjanetakis.com/assets/blog/cards/how-to-start-and-finish-any-web-app-project-678900795cfd6d4fa60e3655dd62ae9f61ef5e14b62ca62050e817e43e861f11.jpg',
    },
    {
      name: 'UI Projects',
      image: 'https://assets.materialup.com/uploads/d0049bc2-257b-477f-a0dc-85874c3dafaa/preview.png',
    },
    {
      name: 'Database Projects',
      image: 'https://149501111.v2.pressablecdn.com/wp-content/uploads/2022/09/Top-18-Database-Projects-Ideas-for-Students.webp',
    },
    {
      name: 'DevOps Projects',
      image: 'https://www.technology-innovators.com/wp-content/uploads/2020/09/DevOps-Framework.jpg',
    },
  ];
  
  export const userCreatedPinsQuery = (userId) => {
    const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      image{
        asset->{
          url
        }
      },
    }`;
    return query;
  };

  export const docDownload = (userId) => {
    const query = `*[_type == 'movie'] {
      title,
      "manuscriptURL": manuscript.asset->url
    }`;
    return query;
  };

  export const userSavedPinsQuery = (userId) => {
    const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
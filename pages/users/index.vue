
<template>
  <div class="container">
    <h1>Blog</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
    <ul>
      <li v-for="(user, index) in users" :key="index">
      <NuxtLink :to="{ name: 'users-id', params: { id: user.id } }">
        {{ user.name }}
      </NuxtLink>
      </li>
    </ul>
    <p>
      <NuxtLink to="/">
        Back to home page
      </NuxtLink>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        var _users = []
        var _posts = []
        _posts = res.data
        return axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
          for(var i in res.data){
            _users.push(res.data[i])
          }
          console.log(_users, _posts)
          return { posts: _posts, users: _users }
        })

      })
  },
  head: {
    title: 'List of posts'
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>

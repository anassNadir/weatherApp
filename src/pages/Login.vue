<template>
  <div class="main__container">
    <div class="login-card">
      <main class="login-content">
        <span class="login-header">Login</span>
        <form class="login-form" @submit.prevent="submit">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            name="email"
            class="login-input"
            autocomplete
            required
          />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            name="password"
            class="login-input"
            minlength="6"
            required
            autocomplete
          />
          <input type="submit" name="submit" value="Login" class="login-btn" />
        </form>
        <div class="signup-link-wrapper">
          <span class="signup-notice">Don't have an account?</span>
          <a class="signup-link" @click="$router.push({ path: '/register' })"
            >Sign up</a
          >
        </div>
      </main>
      <aside class="login-aside">
        <div class="login-aside-overlay"></div>
        <h1 class="login-welcome-text">Welcome Back!</h1>
        <hr class="login-aside-hr" />
      </aside>
    </div>
    <error v-if="error" @hide-banner="error = ''" :message="error" />
    <spinner v-if="loading" />
  </div>
</template>

<script>
  import firebase from 'firebase/app';
  import Error from '../components/Error';
  import Spinner from '../components/Spinner';
  export default {
    name: 'Login',
    components: { Error, Spinner },
    data() {
      return {
        email: '',
        password: '',
        error: '',
        loading: false
      };
    },
    methods: {
      submit() {
        this.loading = true;
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .catch((err) => {
            this.error = err.message;
          })
          .finally(() => (this.loading = false));
      }
    }
  };
</script>

<style scoped>
  .main__container {
    min-height: 90vh;
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 20px 0;
  }

  .login-card {
    position: relative;
    display: flex;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    width: 85%;
    min-height: 80vh;
    animation: fadein 1s ease-in-out;
  }

  .login-header {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 2rem;
    color: #0c1066;
    letter-spacing: 0.2rem;
    font-weight: bold;
    animation: fadein 1.75s ease-in-out;
  }

  .login-content {
    flex: 2 2;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    animation: fadein 1.5s ease-in-out;
    min-height: 100%;
    padding: 40px 0;
  }

  .login-form {
    display: flex;
    flex-flow: column;
    width: 80%;
    align-items: center;
    animation: slidedown 2s ease-in-out;
  }

  .login-aside {
    animation: fadein 2.25s ease-in-out;
    flex: 3 3;
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    min-height: 100%;
    border-radius: 0 10px 10px 0;
    background: url('https://source.unsplash.com/random/1200x900?mountain')
      no-repeat center center;
    background-size: cover;
    position: relative;
  }

  .login-aside-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 0 10px 10px 0;
  }

  .login-aside-hr {
    height: 0.5rem;
    width: 8rem;
    border: none;
    outline: none;
    background-color: white;
    position: relative;
    margin: 0 0 8rem 3rem;
    animation: slideright 4s ease-out;
  }

  .login-welcome-text {
    color: white;
    letter-spacing: 0.03rem;
    margin: 0 0 2rem 3rem;
    font-size: 2.75rem;
    position: relative;
    animation: slideright 2s ease-out;
  }

  .login-input {
    margin: 1rem 0;
    padding: 1.5rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.3);
    width: 80%;
  }

  .login-btn {
    background-color: #00ff9b;
    padding: 1rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 1.5rem;
    width: 50%;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  }

  .login-btn:hover {
    background: linear-gradient(to right, #03a9f4, #00ff9b);
  }

  .login-input::placeholder {
    color: #39437a;
    font-size: 0.9rem;
  }

  .btn-disabled {
    background-color: lightgray;
  }

  .btn-disabled:hover {
    background: lightgray;
  }

  .signup-link-wrapper {
    margin-top: 3rem;
    animation: slideup 1s ease-in-out;
  }

  .signup-link {
    text-transform: uppercase;
    margin-top: 1rem;
    text-decoration: none;
    color: #ff3a82;
    margin-left: 1rem;
    cursor: pointer;
  }

  @media screen and (max-width: 959px) {
    .login-aside {
      display: none;
    }
  }
</style>

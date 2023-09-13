<template>
   <div>
    <form
  action="https://formspree.io/f/xzblvzqp"
  method="POST"
>
<label for="email">Full name:</label>
  <input type="text" name="name">
  <label for="email"> Email:</label>
  <input type="email" name="email">
  <label>Message:</label>
  <input name="message" style="">
  <button class="btn btn-primary" type="submit">Send</button>
</form>
   </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',surname: '',message:'',
        }
    }
}
</script>
<style scoped >
form {
  max-width: 400px;
  margin: 0 auto;
   border: 2px solid black;
   padding: 1.875rem;
   max-width: 22.875rem;
    height: 20rem;
    margin-top: 40px;
    margin-bottom:130px;
 border-radius: 0.4rem;
}

label {
  font-weight: bold;
}

input {
  width: 90%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45A049;
}
</style>
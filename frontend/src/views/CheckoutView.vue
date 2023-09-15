<template>
  <div>
    <h2>Checkout</h2>
    <form @submit.prevent="submitCheckout">
      <!-- Shipping Information -->
      <div class="form-group">
        <label for="name">Full Name:</label>
        <input type="text" id="name" v-model="shippingInfo.fullName" required>
      </div>
      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="shippingInfo.address" required>
      </div>
      <div class="form-group">
        <label for="city">City:</label>
        <input type="text" id="city" v-model="shippingInfo.city" required>
      </div>
      <div class="form-group">
        <label for="zip">ZIP Code:</label>
        <input type="text" id="zip" v-model="shippingInfo.zipCode" required>
      </div>
      
      <!-- Payment Information -->
      <div class="form-group">
        <label for="card">Credit Card Number:</label>
        <input type="text" id="card" v-model="paymentInfo.cardNumber" required>
      </div>
      <div class="form-group">
        <label for="expiry">Expiry Date:</label>
        <input type="text" id="expiry" v-model="paymentInfo.expiryDate" required>
      </div>
      <div class="form-group">
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" v-model="paymentInfo.cvv" required>
      </div>
      
      <!-- Submit Button -->
      <button class="btn" type="submit">Place Order</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shippingInfo: {
        fullName: '',
        address: '',
        city: '',
        zipCode: ''
      },
      paymentInfo: {
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      }
    };
  },
  methods: {
    submitCheckout() {
      // Handle the checkout logic here, such as sending data to a server, validating input, etc.
      // After successful checkout, you can redirect the user to a confirmation page.
      // For now, we'll simply log the data to the console.
      console.log('Shipping Information:', this.shippingInfo);
      console.log('Payment Information:', this.paymentInfo);
    }
  }
};
</script>

<style scoped>

form {
  max-width: 400px;
  margin: 0 auto;
   border: 2px solid white;
   padding: 1.875rem;
   max-width: 22.875rem;
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

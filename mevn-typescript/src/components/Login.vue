<template>
    <form>
        <h3>LogIn</h3>
        <div class="form-group">
            <label>EMAIL</label>
            <input type="email" class="form-control" placeholder="Email" />
        </div>

        <div class="form-group">
            <label>PASSWORD</label>
            <input type="password" class="form-control" placeholder="Password"/>            
        </div>
        <button class="btn btn-primary btn-block"> LogIn</button>
    </form>
</template>

<script lang="ts">
    export default {
        name: 'LoginVue'
    }

</script>
<template>
<div>
    <img :src="logo" :alt="descricao">
</div>
</template>

<script>

export default {
    name: 'Picture',
    data() {
        return{ 
            logo: "/img/logo.png",
            descricao: "logo"
        }
    }
}

</script>

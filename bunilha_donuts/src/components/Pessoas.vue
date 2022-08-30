<template>
<div>
        <h2> Esta é a descrição de nossos donuts: {{ descricaodonuts }}</h2>
    <Info />
    <Forms />
</div>
</template>

<script>
import Info from './Info'
import Forms from './Forms'

export default {
    name: 'Pessoas',
    components: {
        Info,
        Forms
    },
    data() {
        return {
            nome: 'Matheus',
            descricaodonuts: 'deliciousus',
        }
    }
}
</script>

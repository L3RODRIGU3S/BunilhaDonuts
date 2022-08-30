<template>
<div>
        <h2> Esta é a descrição de nossos donuts: {{ descricaodonuts }}</h2>
    <Info />
    <Form />
</div>
</template>

<script>
import Info from './Info'
import Form from './Form'

export default {
    name: 'Pessoa',
    components: {
        Info,
        Form
    },
    data() {
        return {
            nome: 'Matheus',
            descricaodonuts: 'deliciousus',
        }
    }
}
</script>

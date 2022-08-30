<template>
<div>
<PrimeiroComponente />
<LifeCycle />
<Pessoas />
<p>Faça seu {{ testando }}!</p>
</div>
</template>

<script>
    import PrimeiroComponente from './components/PrimeiroComponente.vue'
    import LifeCycle from './components/LifeCycle.vue'
    import Pessoas from './components/Pessoas.vue'

    export default {
        name: 'App',
        components: {
            PrimeiroComponente,
            LifeCycle,
            Pessoas
        },
    data () {
        return {
            testando: "Teste"
        }
    }
    }

</script>

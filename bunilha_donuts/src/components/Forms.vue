<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <form action="">
            <div>
                <InputText />
            </div>
            <div>
            <Submit />
            </div>
        </form>
    </div>
</template>

<script>
import InputText from './form/InputText.vue'
import Submit from './form/Submit.vue'

export default {
    name: 'Forms',
    components: {
        InputText,
        Submit
    }
}
</script>

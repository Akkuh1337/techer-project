export default {
    data() {
        return {
            xmax: 'Максим'
        }
    },
    mounted() {
        console.log('Я использую миксин')
    },
    methods: {
        hello() {
            console.log(`Привет! Меня зовут ${this.xmax}`)
        }
    }
}
const { createApp } = Vue

createApp ({
    data(){
        return {
            discs: [],
        }
    },
    created () {
        axios
            .get('http://localhost/php-dischi-json/php/api.php')
            .then(res => {
                //console.log(res.data);
                this.discs = res.data;
                console.log(this.discs);
            });
    }
}).mount('#app');
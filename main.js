    new Vue({
    el:"#app",
    data:{
        cont:0,
        elem:'',
        elems:[
            {
                message:'Ничего не делать',
                status:false,   
            },
            {
                message:'Сдать проект',
                status:false,
            },
            {
                message:'Написать сообщение',
                status:false,
            }
        ]
    },
    methods:{
        addElement:function(){ 
            if(this.elem!=''){
            this.elems.push({ message: this.elem,status: false})
            this.elem = ''
            }
            else{
                alert('data not entered')
            }
        },
        deleteElement: function () {
			for (var i=0; i<this.count;++i)
			{
				 if(this.elems[i].status==true)
				 {
					this.elems.splice(i, 1); 
                    i--;
				 }
			}   
            this.cont=0;
    },
        performedElements:function(index){
            if(this.elems[index].status==true){
                this.cont++
            }
            else{
                this.cont--
            }
        }
    },
    computed:{
        count:function(){
            count=this.elems.length
            return count
        }
}
})
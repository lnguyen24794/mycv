<template>
<div>

    <b-container>

        <h2>List Posts</h2>

        <b-button size="md" @click.stop="add($event.target)" class='mr-1'>
            Add
        </b-button>

        <b-table striped hover :items="items" :fields="fields">

            <!-- <template slot="name" slot-scope="row">{{row.value.title}} {{row.value.author}}
</template>-->
            <template slot="actions1" slot-scope="row">
                <b-button size="sm" @click.stop="xem(row.item,row.index,$event.target)" class='mr-1'>

                    info

                </b-button>

                <b-button size="sm" @click.stop="edit(row.item,row.index,$event.target)" class='mr-1'>

                    edit

                </b-button>

                <b-button size="sm" @click.stop="remove(row.item,row.index,$event.target)" class='mr-1'>

                    delete

                </b-button>
            </template>

        </b-table>
        <!-- Info modal -->
        <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
            <pre>{{ modalInfo.content }}</pre>
        </b-modal>
        <b-modal @hide="resetModal" :title="dataEdit.title" ok-only id="modalEdit">
            <b-container>
                <b-form @submit="editPosts">
                    <label>{{msg}}</label>
                    <b-form-group id="exampleInputGroup1" label="Title:" label-for="exampleInput1" description="">
                        <b-form-input id="exampleInput1" type="text" v-model="dataEdit.content.title" required placeholder="Enter title">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="exampleInputGroup2" label="Author:" label-for="exampleInput2">
                        <b-form-input id="exampleInput2" type="text" v-model="dataEdit.content.author" required placeholder="Enter author">
                        </b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </b-container>
        </b-modal>
        <b-modal id="deletePost" :title="dataDelete.title" ok-only>
            <h2>Do you want to delete this post  <b-button size="sm" @click="do_delete()" class='mr-1'>
            Yes
        </b-button></h2>
        </b-modal>
    </b-container>
</div>
</template>

<script>
export default {

    data() {

        return {
            msg:"",
            info: "ABC",
            dataDelete:{
                title:"",
                id:"",
            },
            items: [{}],

            fields: [{

                    key: 'id',

                    label: "ID"

                },

                {

                    key: 'title',

                    label: "Title name"

                },

                {

                    key: 'author',

                    label: "Author"

                },

                {

                    key: 'actions1',

                    label: 'Actions'

                },

            ],

            modalInfo: {

                title: "",

                content: ""

            },

            dataEdit: {

                title: "",

                content: ""

            },

        }

    },
    
    methods: {
        editPosts(evt){
            //Kiểm trạng thái là thêm mới hay chỉnh sửa
            //Nếu isNaN trả về true là thêm mới
            if(isNaN(this.dataEdit.content.id)){
                //Khởi tạo url request
                 var url= "http://localhost:3000/posts/";
               //Chạy method post bằng axios
                this.$axios.post(url,this.dataEdit.content).then((res)=>{
                    //Nếu request thêm mới thành công thì sẽ trả về status 201
                    if(res.status==201){
                        this.msg="Thêm thành công";
                    }
                }).catch((error)=>{
                    
                });
            }
            //Ngược lại sẽ là cập nhật
            else{
                //Phương thức preventDefault() để ngăn chặn điều hướng url khi submit
                evt.preventDefault();
                //Khởi tạo url request
                var url= "http://localhost:3000/posts/"+this.dataEdit.content.id;
               //Chạy method put bằng axios
                this.$axios.put(url,this.dataEdit.content).then((res)=>{
                     //Nếu request cập nhật thành công thì sẽ trả về status 200
                    if(res.status==200){
                        this.msg="Sửa thành công";
                    }
                }).catch((error)=>{
                    
                });
            }
            
        },
        //cài đặt nội dung modal về mặc định
        resetModal() {

            this.modalInfo.title = "";

            this.modalInfo.content = "";

        },
        // hiển thị modal thông tin post
        xem(item, index, button) {

            this.modalInfo.title = `Row index: ${index}`;

            this.modalInfo.content = item;

            this.$root.$emit('bv::show::modal', 'modalInfo', button);

        },
        //cập nhật post
        edit(item, index, button) {

            this.dataEdit.title = `Edit index ${index}`;

            this.dataEdit.content = item;

            this.$root.$emit("bv::show::modal", 'modalEdit', button);

        },
        //thêm mới post
        add(button){
            this.dataEdit.title = `Add post`;

            this.dataEdit.content = {
                title:"",
                author:"",
            };

            this.$root.$emit("bv::show::modal", 'modalEdit', button);
        },
        //xóa post
         remove(item, index, button) {
            
            this.dataDelete.title = `Delete post id ${item.id}`;

            this.dataDelete.id=item.id;

            this.$root.$emit("bv::show::modal", 'deletePost', button);

        },
        do_delete(){
             //Khởi tạo url request
                var url= "http://localhost:3000/posts/"+this.dataDelete.id;
            //Chạy method post bằng axios
            this.$axios.delete(url).then((res)=>{
                //Nếu request thêm mới thành công thì sẽ trả về status 201
                console.log(es.status);
                if(res.status==201){
                    this.msg="Thêm thành công";
                }
            }).catch((error)=>{
                
            });
        }
    },

    mounted() {
        // Chạy get request load tất cả dữ liệu ra table
        this.$axios
            .get('http://localhost:3000/posts')
            .then(response => {
                this.info = response;
                this.items = response.data;
            })

    }

}
</script>

<style scoped>

</style>

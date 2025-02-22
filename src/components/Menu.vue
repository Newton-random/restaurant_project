<template>
    <v-container>
        <v-card color="light-blue-darken-1" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>
<v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems" :key="item">
                    <v-card>
                        <v-card color="purple-darken-1">
                            <v-card-item>
                                <v-card-title>{{ item.name }}</v-card-title>

                                <v-card-subtitle>{{item.description}}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>
                            {{item.price}}
                            </v-card-text>
                            <v-btn @click="addToOrder(item)">Order</v-btn>
                        </v-card>
                        </v-card>
                        </v-col>
                        </v-row>
            </v-container>
                        </v-card>    
                                            
                    </v-container>
                    <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h6">Current order: {{totalOrderAmount}}</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in orderItems" :key=item>
                        <v-card color="yellow">
                            <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
                        </v-card>
                        </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container> 
</template>


<script setup>
const menuItems = [
    {
        name: "Chips",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyaWVzfGVufDB8fDB8fHww"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "https://media.istockphoto.com/id/1769268777/photo/fried-sausages-and-vegetables-on-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=-cNvUB_mg2s9Gkbhg_FcA76f6InS9oVKVDexacd23xc="
    },
    {
        name: "lasagna",
        price: 300,
        description: "Best lasagna in town",
        size: "None",
        offers: "None",
        image: "https://media.istockphoto.com/id/1477739651/photo/portion-of-lasagna-in-baking-dish-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=VhAIHt2NBa__8w3WogDX6VmKp3H4OANjLGljdKRW8PE="
    },
    {
        name: "pasta",
        price: 300,
        description: "Best pasta in town",
        size: "None",
        offers: "None",
        image: "https://media.istockphoto.com/id/2149482438/photo/classic-italian-pasta-penne-arrabbiata-with-vegetables-on-white-wooden-table-penne-pasta-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=WcQXKPkOdIrYzVUPQ3oeNoiH0jUELlMm33kR9uQHzTI="
    },
    {
        name: "tortilla",
        price: 200,
        description: "Best tortilla in town",
        size: "None",
        offers: "None",
        image: "https://media.istockphoto.com/id/2148934507/photo/homemade-tacos-served-on-table-with-ingredients-around.webp?a=1&b=1&s=612x612&w=0&k=20&c=e-iZjsZ_3EDh5npoQoKw6WneEyZcrXJG7CqU_WF_Ahw="
    },
    {
        name: "burger",
        price: 500,
        description: "Best burger in town",
        size: "None",
        offers: "None",
        image: "https://media.istockphoto.com/id/2061716709/photo/grilled-rib-burger.webp?a=1&b=1&s=612x612&w=0&k=20&c=OeRKfT736HFidM_TmreA8T8XRgzCs7vjVKx-uzJdRgE="
    }

]

//manage the current state of order
var orderItems =[]
var totalOrderAmount = 0

function calculateTotalAmount(price){
    totalOrderAmount += price
}

function addToOrder(item){
    orderItems.push(item)
    calculateTotalAmount(item.prices)
}
</script>
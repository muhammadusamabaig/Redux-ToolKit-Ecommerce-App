import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const FetchFromServer = createAsyncThunk(
  "fetchDataFrom Api",
  async () => {

    const fetchData = await fetch('/api/users')
    return await fetchData.json()


  }
)
const BookSlice = createSlice({
  name: 'cour',
  initialState: {
    AddToCartData: [],
    gtotal: 0,
    book_data: [],
    AddToCartState: [],
    ViewDetail: {},
  },

  reducers: {

    LoadData:
      (state) => {

        return { ...state }

      }

    ,
    DetailData: (state, action) => {
      let temp

      state.book_data.map((item) => {
        const { id } = item
        if (id === action.payload) {
          temp = item
        }
      })
      return { ...state, ViewDetail: temp }
    }
    ,
    AddToCart: (state, action) => {
      let temp
      let tempitem
      let temparray = [...state.book_data]
      let index



      temparray.map((item) => {
        tempitem = { ...item }
        const { id } = tempitem
        if (id === action.payload) {
          temp = state.AddToCartData.push(item)
          index = state.book_data.indexOf(item)
          console.log(index)
          const { book_data } = state
          let tempbookdata_update = book_data

          // console.log(temp)
          let tempbookdata_update_Data = tempbookdata_update[index]

          tempbookdata_update_Data.AddCartCondition = true
          // console.log({ ...tempbookdata_update_Data })


          return { ...state, book_data: tempbookdata_update, AddToCartData: temp }

        }
      })

    },
    AddToCartFromDetail: (state, action) => {
      let temp
      let tempitem
      let temparray = [...state.book_data]
      let index



      temparray.map((item) => {
        tempitem = { ...item }
        const { id } = tempitem
        if (id === action.payload) {
          temp = state.AddToCartData.push(item)
          index = state.book_data.indexOf(item)
          console.log(index)
          const { book_data } = state
          let tempbookdata_update = book_data


          // // console.log(temp)
          let tempbookdata_update_Data = tempbookdata_update[index]

          tempbookdata_update_Data.AddCartCondition = true
          console.log(tempbookdata_update)
          let viewDetailUpdateButton = state.ViewDetail
          viewDetailUpdateButton.AddCartCondition = true
          //           state.book_data.map((item)=>{
          // if(action.payload===item.id){
          //   console.log(item)
          //   viewDetailUpdateButton=item
          // }
          // })
          console.log(viewDetailUpdateButton)
          console.log(viewDetailUpdateButton)
          console.log({ ...state.ViewDetail })
          return { ...state, ViewDetail: viewDetailUpdateButton, book_data: tempbookdata_update, AddToCartData: temp }

        }
      })
      console.log("chala hy")

    },

    DeleteToCart: (state, action) => {
      let arr
      let temp
      let tempitem
      // let temparray = [...state.book_data]
      let index

      state.AddToCartData.map((item) => {
        tempitem = { ...item }
        const { id } = tempitem
        if (id === action.payload) {

          let tempDeleteToCart = state.AddToCartData
          index = tempDeleteToCart.indexOf(item)

          //           console.log(index)
          let deleteobj = tempDeleteToCart[index]
          console.log({ ...deleteobj })


          // Update Data on book_data****************************************
state.book_data.map((item1)=>{
if(item1.id==item.id){
console.log("updatataaaaaaaaaaaaaaaaate")
let BookData=[...state.book_data]
let tempBookData=BookData
let objIndex=tempBookData.indexOf(item1)
let objectbookData=tempBookData[objIndex]
objectbookData.AddCartCondition=false
state.book_data=tempBookData
}
})

//           let bookData = state.book_data
//           let  = bookData
//          let objindex= tempbookData.indexOf(item)
//           // let UpdatetempDataObject = tempbookData[objindex]
//           // UpdatetempDataObject.AddCartCondition = false
// console.log(objindex,"KKKKLLK")
          arr = tempDeleteToCart.filter(function (item) {


            return item !== deleteobj

          })
          state.AddToCartData = arr
          
// state.book_data=bookData
          return { ...state }

        }
      })
      console.log("chala hy")

    }
    ,
    LoadCartTotal: (state, action) => {
      let loadCartTotal = 0
      state.AddToCartData.map((item) => {

        console.log({ ...item })
        loadCartTotal = loadCartTotal + item.total
      })
      console.log(loadCartTotal)
      return { ...state, gtotal: loadCartTotal }
    }
    ,

    CartTotalIncrement: (state, action) => {

      let TempAddToCartData = [...state.AddToCartData]
      let gtotalcount = 0
      TempAddToCartData.map((item) => {
        if (action.payload == item.id) {
          const index = TempAddToCartData.indexOf(item)
          let AlterObjectData = TempAddToCartData[index]
          AlterObjectData.quantity = AlterObjectData.quantity + 1
          AlterObjectData.total = AlterObjectData.price * AlterObjectData.quantity



          // state.gtotal=+gtotalcount

          return { ...state, AddToCartData: TempAddToCartData }

        }


      })
      state.AddToCartData.map((item) => {
        console.log({ ...item })
        gtotalcount = gtotalcount + item.total
      })
      console.log(gtotalcount, "gtotal")
      state.gtotal = +state.gtotal + gtotalcount
    }
    ,
    CartTotalDecrement: (state, action) => {

      let TempAddToCartData = [...state.AddToCartData]
      let gtotalcount = 0
      TempAddToCartData.map((item) => {
        if (action.payload == item.id) {
          const index = TempAddToCartData.indexOf(item)
          let AlterObjectData = TempAddToCartData[index]
          if (AlterObjectData.quantity > 0) {
            AlterObjectData.quantity = AlterObjectData.quantity - 1
          }
          AlterObjectData.total = AlterObjectData.price * AlterObjectData.quantity

          return { ...state, AddToCartData: TempAddToCartData }

        }


      })
      state.AddToCartData.map((item) => {
        console.log({ ...item })
        gtotalcount = gtotalcount + item.total
      })
      console.log(gtotalcount, "gtotal")
      state.gtotal = +state.gtotal + gtotalcount
    }

  },
  extraReducers:
  {
    [FetchFromServer.fulfilled]: (state, action) => {
      console.log("fulfilled", state, action)
      state.book_data = action.payload
    },
    [FetchFromServer.rejected]: (state, action) => {
      console.log("reject")
    },
    [FetchFromServer.pending]: (state, action) => {
      console.log("pending")
    }
  }

});

export const { LoadData, DetailData, AddToCart, DeleteToCart, AddToCartFromDetail, CartTotalIncrement, CartTotalDecrement, LoadCartTotal } = BookSlice.actions;

export const Loadbook_data = state => state.counter.book_data
export const ViewDetail = state => state.counter.ViewDetail
export const LoadAddToCartData = state => state.counter.AddToCartData
export const total = state => state.counter.total
export const gtotal = state => state.counter.gtotal



export default BookSlice.reducer;

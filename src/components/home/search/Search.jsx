import { SearchOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  InputAdornment,
  TextField,
} from "@mui/material";

function Search() {
  const groceryItems = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Milk" },
    { id: 4, name: "Bread" },
    { id: 5, name: "Eggs" },
    { id: 6, name: "Butter" },
    { id: 7, name: "Cheese" },
    { id: 8, name: "Yogurt" },
    { id: 9, name: "Chicken" },
    { id: 10, name: "Beef" },
    { id: 11, name: "Pork" },
    { id: 12, name: "Fish" },
    { id: 13, name: "Rice" },
    { id: 14, name: "Pasta" },
    { id: 15, name: "Potatoes" },
    { id: 16, name: "Tomatoes" },
    { id: 17, name: "Onions" },
    { id: 18, name: "Garlic" },
    { id: 19, name: "Carrots" },
    { id: 20, name: "Lettuce" },
    { id: 21, name: "Spinach" },
    { id: 22, name: "Broccoli" },
    { id: 23, name: "Cucumber" },
    { id: 24, name: "Bell Pepper" },
    { id: 25, name: "Zucchini" },
    { id: 26, name: "Celery" },
    { id: 27, name: "Avocado" },
    { id: 28, name: "Strawberries" },
    { id: 29, name: "Blueberries" },
    { id: 30, name: "Raspberries" },
    { id: 31, name: "Blackberries" },
    { id: 32, name: "Oranges" },
    { id: 33, name: "Grapes" },
    { id: 34, name: "Watermelon" },
    { id: 35, name: "Pineapple" },
    { id: 36, name: "Cantaloupe" },
    { id: 37, name: "Honeydew Melon" },
    { id: 38, name: "Kiwi" },
    { id: 39, name: "Mango" },
    { id: 40, name: "Peaches" },
    { id: 41, name: "Plums" },
    { id: 42, name: "Apricots" },
    { id: 43, name: "Cherries" },
    { id: 44, name: "Pears" },
    { id: 45, name: "Lemons" },
    { id: 46, name: "Limes" },
    { id: 47, name: "Coconut" },
    { id: 48, name: "Pomegranate" },
    { id: 49, name: "Bananas" },
    { id: 50, name: "Peanut Butter" },
    { id: 51, name: "Jam" },
    { id: 52, name: "Honey" },
    { id: 53, name: "Olive Oil" },
    { id: 54, name: "Vegetable Oil" },
    { id: 55, name: "Salt" },
    { id: 56, name: "Pepper" },
    { id: 57, name: "Sugar" },
    { id: 58, name: "Flour" },
    { id: 59, name: "Baking Powder" },
    { id: 60, name: "Baking Soda" },
    { id: 61, name: "Cereal" },
    { id: 62, name: "Oatmeal" },
    { id: 63, name: "Pancake Mix" },
    { id: 64, name: "Maple Syrup" },
    { id: 65, name: "Coffee" },
    { id: 66, name: "Tea" },
    { id: 67, name: "Juice" },
    { id: 68, name: "Soda" },
    { id: 69, name: "Chips" },
    { id: 70, name: "Popcorn" },
    { id: 71, name: "Crackers" },
    { id: 72, name: "Cookies" },
    { id: 73, name: "Chocolate" },
    { id: 74, name: "Ice Cream" },
    { id: 75, name: "Frozen Vegetables" },
    { id: 76, name: "Frozen Fruit" },
    { id: 77, name: "Frozen Pizza" },
    { id: 78, name: "Frozen Meals" },
    { id: 79, name: "Canned Soup" },
    { id: 80, name: "Canned Vegetables" },
    { id: 81, name: "Canned Fruit" },
    { id: 82, name: "Canned Beans" },
    { id: 83, name: "Canned Tuna" },
    { id: 84, name: "Pasta Sauce" },
    { id: 85, name: "Salsa" },
    { id: 86, name: "Salad Dressing" },
    { id: 87, name: "Mayonnaise" },
    { id: 88, name: "Mustard" },
    { id: 89, name: "Ketchup" },
    { id: 90, name: "Barbecue Sauce" },
    { id: 91, name: "Soy Sauce" },
    { id: 92, name: "Worcestershire Sauce" },
    { id: 93, name: "Vinegar" },
    { id: 94, name: "Pickles" },
    { id: 95, name: "Olives" },
    { id: 96, name: "Deli Meat" },
    { id: 97, name: "Soup Mix" },
    { id: 98, name: "Ramen Noodles" },
    { id: 99, name: "Instant Rice" },
    { id: 100, name: "Instant Noodles" },
  ];

  return (
    <Box
      sx={{
        width: "90vw",
      }}
    >
      <Autocomplete
        options={groceryItems}
        getOptionLabel={(item) => item.name}
        renderInput={(params) => (
          <TextField
            {...params}
            defaultValue="Search for items"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
          />
        )}
        sx={{
          backgroundColor: "#233060",
          color: "black",
          borderRadius: 2,
          "& .MuiOutlinedInput-root": {
            borderRadius: 5,
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
          },
          "& input:focus": {
            outline: "none",
          },
        }}
      />
    </Box>
  );
}

export default Search;

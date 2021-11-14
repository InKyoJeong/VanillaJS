import { BASE_URL } from "../constants/index.js";

export const getMenu = async (category) => {
  try {
    const res = await fetch(`${BASE_URL}/api/category/${category}/menu`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await res.json();
  } catch (error) {
    alert("에러발생! 데이터를 가져올 수 없습니다.");
    console.error("Error:", error);
  }
};

export const postMenu = async (category, menuName) => {
  try {
    const res = await fetch(`${BASE_URL}/api/category/${category}/menu`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: menuName }),
    });

    return await res.json();
  } catch (error) {
    alert("에러발생! 데이터를 등록할 수 없습니다.");
    console.error("Error:", error);
  }
};

export const updateMenuName = async (category, menuId, menuName) => {
  try {
    const res = await fetch(
      `${BASE_URL}/api/category/${category}/menu/${menuId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: menuName }),
      }
    );

    return await res.json();
  } catch (error) {
    alert("에러발생! 데이터를 수정할 수 없습니다.");
    console.error("Error:", error);
  }
};

export const updateMenuSold = async (category, menuId) => {
  try {
    const res = await fetch(
      `${BASE_URL}/api/category/${category}/menu/${menuId}/soldout`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return await res.json();
  } catch (error) {
    alert("에러발생! 데이터를 품절 처리할 수 없습니다.");
    console.error("Error:", error);
  }
};

export const deleteMenu = async (category, menuId) => {
  try {
    await fetch(`${BASE_URL}/api/category/${category}/menu/${menuId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    alert("에러발생! 데이터를 삭제할 수 없습니다.");
    console.error("Error:", error);
  }
};

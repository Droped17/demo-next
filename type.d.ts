export type Posts = {
    _id: null,
    name: string,
    title: string,
    createdAt: string,
    avatar: string
    detail: string
};

export type FormData = {
    author: string;
    title: string;
    detail: string;
    avatar: string;
    createdAt: string;
};

export type RegisterFormData = {
    username: string;
    password: string;
    confirmPassword: string
  }
  
  export type RegisterValidationError = {
    [key: string]: string;
  }




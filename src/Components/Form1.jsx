import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import './Form1.css'

const Form1 = () => {
    const {handleChange,handleSubmit,values,errors,}=useFormik({
        initialValues:{
            name:'',email:'',password:'',birth:'',phone:'',gender:'',hobbies:'',country:'',message:''
        },
        onSubmit:(data)=>{
            console.log(data);
        },
        validationSchema:yup.object({
          name: yup
          .string()
          .min(3, 'Name must be at least 3 characters')
          .required('Enter your name'),
    
        email: yup
          .string()
          .email('Invalid email address')
          .required('Enter your email'),
    
        password: yup
          .string()
          .min(6, 'Password must be at least 6 characters')
          .required('Enter your password'),
    
        birth: yup
          .date()
          .max(new Date(), 'Date of birth cannot be in the future')
          .required('Enter your date of birth'),
    
        phone: yup
          .string()
          .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
          .required('Enter your phone number'),
    
        gender: yup
          .string()
          .oneOf(['male', 'female', 'other'], 'Select a gender')
          .required('Select your gender'),
    
        hobbies: yup
          .array()
          .min(1, 'Select at least one hobby')
          .required('Select at least one hobby'),
    
        country: yup
          .string()
          .required('Select your country'),
    
        message: yup
          .string()
          .min(10, 'Message must be at least 10 characters')
          .required('Enter your message'),
        })
    })
  return (
    <div>
         <div className="form-container">
      <form onSubmit={handleSubmit} className="form-card">
        <h2 className="form-title">Registration Form</h2>

        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="name"><i className="fas fa-user"></i> Full Name</label>
          <input type="text" id="name" name="name" value={values.name} onChange={handleChange} placeholder="Enter your full name" />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email"><i className="fas fa-envelope"></i> Email</label>
          <input type="email" id="email" name="email" value={values.email} onChange={handleChange} placeholder="Enter your email" />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
          <input type="password" id="password" name="password" value={values.password} onChange={handleChange} placeholder="Enter your password" />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* Date of Birth */}
        <div className="form-group">
          <label htmlFor="dob"><i className="fas fa-calendar-alt"></i> Date of Birth</label>
          <input type="date" id="dob" name="birth" value={values.birth} onChange={handleChange} />
          {errors.birth && <p className="error">{errors.birth}</p>}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone"><i className="fas fa-phone"></i> Phone</label>
          <input type="number" id="phone" name="phone" value={values.phone} onChange={handleChange} placeholder="Enter your phone number" />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        {/* Gender */}
        <div className="form-group">
          <label><i className="fas fa-venus-mars"></i> Gender</label>
          <div className="radio-group">
            <label><input type="radio" name="gender" value="male" checked={values.gender === 'male'} onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="female" checked={values.gender === 'female'} onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="other" checked={values.gender === 'other'} onChange={handleChange} /> Other</label>
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}

        </div>

        {/* Hobbies */}
        <div className="form-group">
          <label><i className="fas fa-heart"></i> Hobbies</label>
          <div className="checkbox-group">
            <label><input type="checkbox" name="hobbies" value="reading" checked={values.hobbies.includes("reading")} onChange={handleChange} /> Reading</label>
            <label><input type="checkbox" name="hobbies" value="travelling" checked={values.hobbies.includes("travelling")} onChange={handleChange} /> Travelling</label>
            <label><input type="checkbox" name="hobbies" value="coding" checked={values.hobbies.includes("coding")} onChange={handleChange} /> Coding</label>
          </div>
          {errors.hobbies && <p className="error">{errors.hobbies}</p>}
        </div>

        {/* Country */}
        <div className="form-group">
          <label htmlFor="country"><i className="fas fa-flag"></i> Country</label>
          <select id="country" name="country" value={values.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="USA">United States</option>
            <option value="Canada">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
          </select>
          {errors.country && <p className="error">{errors.country}</p>}
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message"><i className="fas fa-comment"></i> Message</label>
          <textarea id="message" name="message" value={values.message} onChange={handleChange} placeholder="Enter your message" />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        {/* Submit */}
        <div className="form-group">
          <input type="submit" value="Submit" className="submit-btn" />
        </div>
      </form>
    </div>
    </div>
  )
}

export default Form1

import React, {
  useState,
  useEffect,
  Fragment
} from 'react'

import axios from 'axios'

export default function UserAll() {

  const [users, setUsers] = useState([])

  function getAllUser(params) {
    return axios.get('http://localhost:4000/user', {
      headers: {
        // 'X-Requested-With' : 'XMLHttpRequest',
        accept: 'application/json'
      }
    }).then(
      (users) => setUsers(users.data),
      (err) => console.log(err)
    )
  }

  useEffect(() => {
    getAllUser()
  }, [])

  return (
    <Fragment> {
        (users.length > 0) &&
        users.map(
          (user, k) => ( <
            p key = {
              `${k}`
            } > {
              user.name
            } </p>
          )
        )
      } {
        (users.length === 0) && ( <p> Nothing Data </p>)}
        </Fragment>
        )
      }

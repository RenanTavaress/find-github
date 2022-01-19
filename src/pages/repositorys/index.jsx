import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import api from '../../api/api'
import Spinner from '../../components/Spinner'
import { NotFound } from '../../components/NotFound';
import { Container, ReposUl, ReposA } from './styles'
import { GoGitBranch } from 'react-icons/go'
const Repositorys = () => {
   const [ user, setUser ] = useState([])
   const [ loading, setLoading ] = useState(false)

   const { params } = useRouteMatch()
   const history = useHistory()

   useEffect(() => {
      api.get(`/users/${params.user}/repos`).then(response => {
         setUser(response.data)
         setLoading(true)
      }).catch(() => {
         history.push('/404')
      })
      
   },[params.user, history])

   return (
      <Container>
       
         { !loading && <Spinner/>}
         
         {loading && !user.length && 
            <NotFound>No Results Found</NotFound>
         } 

         {loading && user.length > 0 && (
            <ReposUl>
               {
                  user.map(repository => (
							<ReposA 
								key={repository.id}
								target="_blank"
								href={`https://github.com/${params.user}/${repository.name}`}
								rel="noreferrer"
							> 
								<p>
									{repository.name}
								</p>
								
								<span>
									Linguagem: 
									{repository.language ? ' ' + repository.language : ''} 
								</span>

								<span>
									{repository.forks_count}
									<GoGitBranch/>
								</span>
							</ReposA>
                  ))
               }
            </ReposUl>
         )}
      </Container>
   )
}

export default Repositorys;

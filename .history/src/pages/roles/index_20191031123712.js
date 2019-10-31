import * as React from 'react'
import importAll from 'import-all.macro'
import { Route } from 'react-router'
import { useUIComponents, MDXThemeProvider, useMDXFiles } from '@create-react-resume/core'

const backGroundStyle = {
  color: 'linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 30%,rgb(58, 102, 183) 30%,rgb(87, 179, 194) 100%)';
}

const RolesRoute = () => {
  const { RolesPage } = useUIComponents()
  const mdxModules = useMDXFiles(importAll.deferred('./**/*.mdx'))
  const mdxModulesDesc = [...mdxModules].reverse()
  return (
    <Route
      path="/roles"
      component={() => (
        <RolesPage>
          {mdxModulesDesc.map((e, index) => {
            const { MDXComponent, ...other } = e
            return (
              <MDXThemeProvider>
                <MDXComponent {...other} key={index} />
              </MDXThemeProvider>
            )
          })}
        </RolesPage>
      )}
    />
  )
}

export default RolesRoute

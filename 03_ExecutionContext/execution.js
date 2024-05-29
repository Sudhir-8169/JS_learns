/* 
javaScript Execution Context

 1. GLOBAL Excecution CONTEXT 

 ->this context  will refer to this variable 
 -> Different platforms will have different globale context
 -> browswers Global Context will be Window Object   
 
 2. Functional / Function Execution Context
 3.Eval Execution Context


 */

 /* 
 how JS code Execute

  --> Memory Creation Phase
        # here all the vriables will be initiated 
  -->Execution Phase 

  -->Example 
    
        let val1 = 10
        let val2 =5
        function addNum(){
            let total = num1 + num2
            return total
        }
        let result1 = addNum(val1,val2)
        let result2 = addNum(10,20)

        1. Global Execution --> this

        2. Memory Phase
            val1 -> undefined
            val2 -> undefined
            addNum -> definition
            result1 ->undeefined
            resul2 ->undeefined
        3.  Execution Phase
            val1 <-10
            val2 <-5
            addNUm --> New Vriable Enviorment
                       Execution Thread
                       Again:
                       1. Memory Phase
                            Val1->undefined
                            Val2->undefined
                            Total->undefined

                       2. Execution Phase
                            num1 <- 10
                            num2 <- 5
                            total <- 15
                            return total will go to the Gloabal execution context
             result1 <- 15
             addNUm --> New Vriable Enviorment
                       Execution Thread
                       Again:
                       1. Memory Phase
                            Val1->undefined
                            Val2->undefined
                            Total->undefined

                       2. Execution Phase
                            num1 <- 10
                            num2 <- 2
                            total <- 12
                            return total will go to the Gloabal execution context
             result2 <- 12          

                          

                              

                                    

    
 */
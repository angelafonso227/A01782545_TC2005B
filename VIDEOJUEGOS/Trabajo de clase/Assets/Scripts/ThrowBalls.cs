/*
 * Create copies of a ball object to fall on the game scene
 * Angel Afonso
 * 2023-04-18
 */

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ThrowBalls : MonoBehaviour
{
    public float delay;
    public GameObject Ball;
    public float limit;

    // Start is called before the first frame update
    void Start()
    {
        InvokeRepeating("CreateBall", delay, delay);
    }


    void CreateBall()
    {
        Vector2 newPos = new Vector2(Random.Range(-limit, limit), 6.5f);
        Instantiate(Ball, newPos, Quaternion.identity);
    }

}
